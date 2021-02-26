/**
 * Uses Node's inbuilt Streams, regex, and arrays to read a large json file and search / filter
 * - Less performant than './buffered-read.js'
 */
// Refs:
// https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33
// https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e

const { createReadStream } = require('fs');

// const { readfile } = require('fs').promises;

const srcFile = './data.json';
const subjectId = 2;
const tagId = 2;
let startTime;

let readStream;



const lookup = async () => {

  const results = [];

  const filterResults = (jsonChunk) => {
    // https://hackernoon.com/5-techniques-to-iterate-over-javascript-object-entries-and-their-performance-6602dcb708a8
    for (const key in jsonChunk) {
      if ( jsonChunk[key].subjectIds.includes(subjectId) ) {
        results.push(jsonChunk[key]);
      } else if ( jsonChunk[key].tagIds.includes(tagId) ) {
        results.push(jsonChunk[key]);
      }
    }
  };

  await new Promise((resolve, reject) => {

    let buffer = '';

    readStream = createReadStream(srcFile, { encoding: 'utf-8', emitClose: true});

    const pump = () => {

      const position = buffer.indexOf('\n');
      const entry = buffer.slice(0, position);
      buffer = buffer.slice(position + 2);
      if (!entry.match(/^{$/) && !entry.match(/^}$/)) {

        try {
          const jsonChunk = JSON.parse(`{${entry.replace(/,$/, '')}}`);
          filterResults(jsonChunk);
        } catch (e) {
          //...
          // console.log('e', e);
        }
        // console.log('buffer state', buffer);
        if (buffer.match(/\n/g)) {
          const remaining = buffer.match(/\n/g);
          // console.log('buffer length', remaining ? remaining.length : 0);
          pump();
        }
      }
    };

    readStream.on('error', error => {
      reject(err);
    });

    // Listen for data
    readStream.on('data', chunk => {
      const remaining = buffer.match(/\n/g);
      // console.log('onchunky, buffersize', remaining ? remaining.length : 0);
      buffer += chunk;
      pump();

    });

    // File is done being read
    readStream.on('close', () => {
      // console.log('on close, results = ', results);
      resolve(results);
    });
  });

  return results;

};

const run = async () => {
  startTime = process.hrtime();
  const results = await lookup();
  return results;
};

run().then((results) => {
  const endTime = process.hrtime(startTime);
  const runTime = ((endTime[0] * 1000000000 + endTime[1]) / 1000000 );
  console.log(`Finished gathering ${results.length} results in ${runTime} ms`);
});
