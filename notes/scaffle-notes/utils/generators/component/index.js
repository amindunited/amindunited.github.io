/* eslint-disable */
const { readdir, readFile, writeFile, mkdir } = require('fs').promises;
const path = require('path');
/* eslint-enable */

let config = {
  namingRules: [
    {
      match: /\.module.scss/,
      type: 'titleCaseName'
    },
    {
      match: /\.tsx/,
      type: 'titleCaseName'
    }
  ]
};

const setConfig = (args) => {
  // get the path (everything before the last '/')
  const givenPath = path.dirname(args[0]);

  // get the name (the word after the last '/')
  const componentName = path.basename(args[0]);

  const projectRoot = path.join(process.cwd(), '/src');
  const configDestination = path.join(projectRoot, '/components');

  // if there is no hyphen in the name, and web components naming is turned on
  // ...throw error;
  // if (!componentName.match(/-/)) {
  //   throw `
  // ################################################
  // Error!
  // A Web Component must have a hyphen in it's name
  // ################################################
  // `;
  // }

  return {
    givenPath: givenPath,
    componentName: componentName,
    templatePath: path.join(__dirname, '/templates'),
    projectRoot: path.join(process.cwd(), '/src'),
    configDestination: path.join(projectRoot, '/components'),
    destination: path.join(configDestination, givenPath, componentName)
  };
};

const getTemplateFiles = (templateDir) => {
  return readdir(templateDir);
};

/**
 * Converts a sting into an object containing the different case types for that string
 *
 * @param {string} componentName
 *
 * @returns {object} - with keys for kebabCaseName, camelCaseName,titleCaseName
 */
const nameCases = (componentName) => {
  const kebabCaseName = componentName;
  const camelCaseName = kebabCaseName.split(/\-/).reduce((accumulator, current) => {
    return (
      accumulator +
      current.toLowerCase().replace(/^\w/, (char) => {
        return char.toUpperCase();
      })
    );
  });

  const titleCaseName = camelCaseName.replace(/^\w/, (char) => char.toUpperCase());

  return {
    kebabCaseName,
    camelCaseName,
    titleCaseName
  };
};

const runReplacements = (srcString, nameCases) => {
  const results = Object.keys(nameCases).reduce((newString, caseNameKey) => {
    const replace = '\\${' + caseNameKey + '}';
    const regex = new RegExp(replace, 'g');
    return newString.replace(regex, nameCases[caseNameKey]);
  }, `${srcString}`);
  return results;
};

const processTemplates = async (templates) => {
  await mkdir(config.destination, { recursive: true }).catch((err) => console.error(err));
  templates.forEach(async (template) => {
    const rawFileContent = await readFile(config.templatePath + '/' + template, { encoding: 'utf8' });
    const fileContent = runReplacements(rawFileContent, config.nameCases);
    const fileName = runReplacements(template, config.nameCases).replace(/\.template$/, '');
    await writeFile(config.destination + '/' + fileName, fileContent);
  });
};

module.exports = async (args) => {
  config = setConfig(args);
  config.nameCases = nameCases(config.componentName);
  const templates = await getTemplateFiles(config.templatePath);
  processTemplates(templates);
};
