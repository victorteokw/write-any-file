module.exports = class WriteAnyFileError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'WriteAnyFileError';
    this.code = 'WRITE_ANY_FILE_ERROR';
  }
};
