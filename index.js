const path = require('path');
const writers = require('./lib/writers');
const WriteAnyFileError = require('./lib/WriteAnyFileError');

const getWriter = (location) => {
  const ext = path.extname(location).substr(1);
  if (ext === '') {
    throw WriteAnyFileError(`Unknown file format: '${location}'.`);
  }
  const writer = writers[ext];
  if (!writer) {
    throw WriteAnyFileError(`Unhandled file format '${ext}' '${location}'.`);
  }
  return writer;
}

const writeFile = (data, location) => {
  return getWriter(location).async(data, location);
};

const writeFileSync = (data, location) => {
  return getWriter(location).sync(data, location);
};

writeFile.sync = writeFileSync;
module.exports = writeFile;
module.exports.default = writeFile;
