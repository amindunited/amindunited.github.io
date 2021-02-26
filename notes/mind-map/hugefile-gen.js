/**
 * Creates './data.json' file with x number of entries
 */
const { appendFile, writeFile } = require('fs').promises;

/**
 * CHANGE THIS VALUE TO CREATE MORE RECORDS
 */
const numberOfRecords = 200000;

let startTime;

const appendLine = async (line) => {
  await appendFile('./data.json', line);
};

const generateIds = () => {
  const numIds = Math.floor(Math.random() * 6) + 1;
  const arr = [...Array(numIds)].map(() => {
    return Math.floor(Math.random() * 40) + 1;
  });
  return arr;
};

const createRow = async (id) => {
  const subjectIds = generateIds();
  const tagIds = generateIds();
  return `"${id}": { "articleId": "${id}", "subjectIds": [${subjectIds}], "tagIds": [${tagIds}] }`;
};

const run = async (numIds) => {
  startTime = process.hrtime();
  console.log(`Going to try to Generate ${numIds} entries`);
  await writeFile('./data.json', ''); // Delete the old content
  await appendLine(`{
`);
  const lines = await [...Array(numIds)].reduce(async (previousPromise, val, index, arr) => {
    await previousPromise;
    return createRow(index).then((row) => {
      if (index === arr.length - 1) {
        return appendLine(`   ${row}
`);
      } else {
        return appendLine(`   ${row},
`);
      }
    })
  }, Promise.resolve());
  await appendLine(`}
`);
};

run(numberOfRecords).then(() => {
  const endTime = process.hrtime(startTime);
  const runTime = ((endTime[0] * 1000000000 + endTime[1]) / 1000000 );
  console.log(`Finished Generating ${numberOfRecords} entries in ${runTime} ms`);
});
