/**
 * Uses Node's inbuilt Streams and Buffers to read a large json file and search / filter
 */

// Refs:
// https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33
// https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e

// https://github.com/maleck13/readline/blob/master/readline.js
// https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/

const { createReadStream } = require('fs');

const srcFile = './data.json';
const subjectId = 2;
const tagId = 2;
let startTime;

let readStream;

let results = [];

const filterResults = (jsonChunk) => {
  // console.log('filterresults', jsonChunk);
  // https://hackernoon.com/5-techniques-to-iterate-over-javascript-object-entries-and-their-performance-6602dcb708a8
  for (const key in jsonChunk) {
    if ( jsonChunk[key].subjectIds.includes(subjectId) ) {
      results.push(jsonChunk[key]);
    } else if ( jsonChunk[key].tagIds.includes(tagId) ) {
      results.push(jsonChunk[key]);
    }
  }
};

const addResult = (line) => {
  // console.log('got line', `{ ${line.toString()} }`);
  try {
    const lineJSON = JSON.parse(`{ ${line.toString()} }`);
    filterResults(lineJSON);
  } catch (e) {
    // console.log('e', e);
  }
};

const lookup = async () => {
  const maxLineLength = 4096; // 4K
  const lineBuffer = Buffer.alloc(maxLineLength);
  const readStream = createReadStream(srcFile, {});

  let lineLength = 0;
  let lineCount = 0;
  let byteCount = 0;

  readStream.on('data', (chunk) => {

    const dataLen = chunk.length;

    for (let i = 0; i < dataLen; i++) {

      if (chunk[i] == 10 || chunk[i] == 13) { // Newline char was found.

        if (chunk[i] == 10) {
          lineCount++;
          // emit(lineCount, byteCount);
          const line = lineBuffer.slice(0, lineLength-1); // minus 1 to get rid of comma
          addResult(line);
          lineLength = 0;
        }
      } else {
        lineBuffer[lineLength] = chunk[i]; // Buffer new line data.
        lineLength++;
      }
      byteCount++;
    }
  });

  // File is done being read
  readStream.on('close', () => {
    // console.log('on close, results = ', results);
    // resolve(results);

    const endTime = process.hrtime(startTime);
    const runTime = ((endTime[0] * 1000000000 + endTime[1]) / 1000000 );
    console.log(`Finished gathering ${results.length} results in ${runTime} ms`);
  });
};

const run = async () => {
  startTime = process.hrtime();
  const results = await lookup();
  return results;
};

run().then((results) => {
  // const endTime = process.hrtime(startTime);
  // const runTime = ((endTime[0] * 1000000000 + endTime[1]) / 1000000 );
  // console.log(`Finished gathering ${results.length} results in ${runTime} ms`);
});
