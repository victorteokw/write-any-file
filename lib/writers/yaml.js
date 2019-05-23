const fs = require('fs');
const WriteAnyFileError = require('../WriteAnyFileError');

const serialize = (data) => {
  let YAML;
  try {
    YAML = require('js-yaml');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new WriteAnyFileError(
        "Dependency missing. Please install 'js-yaml'."
      );
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return YAML.safeDump(data);
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
