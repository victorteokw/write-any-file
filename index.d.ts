import writeFile = require('write-any-file');
declare namespace writeFile {
  function sync(data: any, location: string): void;
}
declare function writeFile(data: any, location: string): void;
export default writeFile;
