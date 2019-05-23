const fs = require('fs');
const WriteAnyFileError = require('../WriteAnyFileError');

const serialize = (data) => {
  let CSON;
  try {
    CSON = require('cson-parser');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new WriteAnyFileError(
        "Dependency missing. Please install 'cson-parser'."
      );
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return CSON.stringify(data, null, 2);
};

module.exports = {
  async: (data, location) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(location, data, (err) => {
        if (err) reject(err);
        resolve(undefined);
      });
    });
  },
  sync: (data, location) => {
    fs.writeFileSync(location, serialize(data));
  }
};
