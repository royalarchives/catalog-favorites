# Library: Favorites

A module for [Library](https://github.com/royalarchives/library) that allows you to maintain a list of your favorite objects.

### Documentation

- [How to use](#how-to-use)
- [Index data structure](#index-data-structure)
- [Using the API with NodeJS](#using-the-media-index-with-nodejs)

## How to use

First install the module with `NPM`:

    $ npm install @royalarchives/library-favorites

If you are using [Library](https://github.com/royalarchives/library) from the command-line include the module name in your arguments:

    $ node scanner.js @royalarchives/library-favorites /path/to/files

If you are using [Library](https://github.com/royalarchives/library) with NodeJS include the module name in the parameters:

    const Library = require('@royalarchives/library')
    await Library.scan(['@royalarchives/library-favorites'], ['/path/to/files'])

## Index data structure

[Top of page](#documentation)

## Using the API with NodeJS

[Top of page](#documentation)

## License

MIT
