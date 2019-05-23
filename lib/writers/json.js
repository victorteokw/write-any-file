const fs = require('fs');

const serialize = (data) => {
  return JSON.stringify(data, null, 2);
};

module.exports = {
  async: (data, location) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(location, serialize(data), (err) => {
        if (err) reject(err);
        resolve(undefined);
      });
    });
  },
  sync: (data, location) => {
    fs.writeFileSync(location, serialize(data));
  }
};
