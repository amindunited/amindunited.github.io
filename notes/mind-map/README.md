# MindMap

This first experiment was for creating relationship look up tables.

It was looking at the performance of node loading and searching a large JSON file.

In the current state, searching a file with 200,000 is taking ~800ms, which is too much.

## Goal

Reading / Searching / Filtering a large data set in a reasonable amount of time. In these article's ([part one](https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33), [part two](https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e)) she claims 1885 ms to read and filter a 2.55gb file with 13 031 541 entries. I am currently reading a 17.7 mb file with 200 000 entries and it is taking 800ms.

To match her speed, it will need to be:

1.35 mb per ms

where I'm at

0.022 mb per ms

__she's doing 400mb in 1.9ms!__

## Scripts

 - ```./hugefile-gen.js``` creates a json files with x entries.
 - ```./read-entries.js``` uses node's createReadStream, and buffers it to a string to read the file.
  - ```./buffered-read.js``` uses node's createReadStream, and Buffer.alloc to read the file.
  - ```./line-count.buffered.js``` is a copy of buffered-read with parts commented out, for performance ref.

## Notes

Going forward it would be good to try using ```createReadStream().pipe()``` it might be more performant than the other methods.

## References
[Paige Niedringhaus' implementation](https://github.com/paigen11/file-read-challenge/blob/master/readFileEventStream.js)

[Paige Niedringhaus' Article (part one)](https://itnext.io/using-node-js-to-read-really-really-large-files-pt-1-d2057fe76b33)

[Paige Niedringhaus' Article (part two)](https://itnext.io/streams-for-the-win-a-performance-comparison-of-nodejs-methods-for-reading-large-datasets-pt-2-bcfa732fa40e)

[readline.js (kind of a pump implementation)](https://github.com/maleck13/readline/blob/master/readline.js)

[How to use Buffers in node](https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/)
