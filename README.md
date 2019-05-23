# Write Any File!
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

Write to any file you want in any format.

## Design Philosophy

This is a handy tool for save user configuration files in user's preferred
format. Use with [Load Any File!](https://github.com/zhangkaiyulw/load-any-file)
for better coding experience.

## Installation

```bash
npm i write-any-file -s
```

## Usage

To write to a file asynchronously:
```js
await writeFile(data, '/home/john/config.json');
await writeFile(data, '/home/john/config.coffee');
await writeFile(data, '/home/john/config.yaml');
```
To write to a file synchronously:
```ts
writeFile.sync(data, '/home/john/config.json');
writeFile.sync(data, '/home/john/config.coffee');
writeFile.sync(data, '/home/john/config.yaml');
```

## API

### writeFile(data: any, location: string): Promise<void>;

Write `data` to `location` asynchronously.

### writeFile.sync(data: any, location: string): void;

Write `data` to `location` synchronously.

## Change Log

- 0.1.0 (2019-05-23)
  - basic functionality

## License

MIT © [Zhang Kai Yu][license-url]

[npm-image]: https://badge.fury.io/js/write-any-file.svg
[npm-url]: https://npmjs.org/package/write-any-file
[travis-image]: https://travis-ci.org/zhangkaiyulw/write-any-file.svg?branch=master
[travis-url]: https://travis-ci.org/zhangkaiyulw/write-any-file
[cov-image]: https://codecov.io/gh/zhangkaiyulw/write-any-file/branch/master/graph/badge.svg
[cov-url]: https://codecov.io/gh/zhangkaiyulw/write-any-file
[daviddm-image]: https://david-dm.org/zhangkaiyulw/write-any-file.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zhangkaiyulw/write-any-file
[daviddm-image-dev]: https://david-dm.org/zhangkaiyulw/write-any-file/dev-status.svg
[daviddm-url-dev]: https://david-dm.org/zhangkaiyulw/write-any-file?type=dev
[license-image]: https://img.shields.io/github/license/zhangkaiyulw/write-any-file.svg
[license-url]: https://github.com/zhangkaiyulw/write-any-file/blob/master/LICENSE
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: https://github.com/zhangkaiyulw/write-any-file/blob/master/CONTRIBUTING.md
