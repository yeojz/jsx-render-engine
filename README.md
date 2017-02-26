# jsx-render-engine
A pluggable jsx library agnostic render engine. (react, preact, react-router etc.)

[![Build Status][build-badge]][build-link]
[![Coverage Status][coveralls-badge]][coveralls-link]

## About
`jsx-render-engine` is a an in-place object manipulation engine to transform object content using a JSX library as template.

It currently supports
[React](https://facebook.github.io/react/),
[Preact](https://www.npmjs.com/package/preact),
[React Router](https://www.npmjs.com/package/react-router)
as render strategies. You can also write your own rendering strategies.

## Installation

Using [npm](https://www.npmjs.com/):

```
$ npm install --save jsx-render-engine
```

Install other dependencies: For example:

```
$ npm install react react-dom
$ npm install preact preact-render-to-string
```

## Object reference

```js
export default {
  'home': {
    title: 'test',
    template: 'HomeTemplate.jsx',
    content: 'markdown content'
  }
}
```

## Related Project

The was originally used in [metalsmith-react-templates](https://github.com/yeojz/metalsmith-react-templates)

## License

MIT [`License`](/LICENSE) © Gerald Yeo

[npm-badge]: https://img.shields.io/npm/v/jsx-render-engine.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/jsx-render-engine.svg

[build-badge]: https://img.shields.io/circleci/project/github/yeojz/jsx-render-engine.svg.svg?style=flat-square
[build-link]: https://circleci.com/gh/yeojz/jsx-render-engine.svg
