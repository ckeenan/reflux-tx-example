Install modules and start server with: `npm start`

Learning: [React Lifecycle](http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/)

See `package.json -> scripts: { ... }` for other scripts


Technologies
=============

- [React](http://facebook.github.io/react/) - A Javascript Library For Building User Interfaces
- [Reflux](https://github.com/spoike/refluxjs) - A simple library for uni-directional dataflow application architecture inspired by ReactJS Flux
- [React-Router-Component](http://strml.viewdocs.io/react-router-component) - Allows you to define routes in your React application in a declarative manner, directly as a part of your component hierarchy.
- [Webpack](http://webpack.github.io/) - Module Bundler w/ Live Injection
- [Jest](http://facebook.github.io/jest/) - Painless Javascript Unit Testing
- [Nightwatch](http://nightwatchjs.org/) - is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites.
- [PostCSS](https://github.com/postcss/postcss) - is a tool for transforming CSS with JS plugins
- [Babel](https://babeljs.io/) - Babel will turn your ES6+ code into ES5 friendly code, so you can start using it right now without waiting for browser support
- [ESLint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX 

Development
=

The development server is setup using Webpack w/ `npm start`

```
> npm start
...
https://localhost:8080/
webpack result is served from /js/
content is served from .../react-webpack-example/src
404s will fallback to /index.html
Hash: 6304c41877c95731fb5f
Version: webpack 1.8.9
Time: 4620ms
      Asset     Size  Chunks             Chunk Names
    main.js  1.38 MB       0  [emitted]  main
main.js.map  1.51 MB       0  [emitted]  main
chunk    {0} main.js, main.js.map (main) 1.21 MB [rendered]
...
webpack: bundle is now VALID.
```

Tests
=

Unit tests are run using Jest w/ `npm test`.

```
> npm test
...

Found 3 matching tests...
 PASS  __tests__/components/Breadcrumb-test.js (2.396s)
 PASS  __tests__/components/NavBar-test.js (2.473s)
 PASS  __tests__/components/LinkTo-test.js (3.064s)
3 tests passed (3 total)
Run time: 5.97s
```

Browser tests are run with Nightwatch w/ `npm run browser`

```
> npm run browser
...

Starting selenium server in parallel mode... started - PID:  11996

Started child process for env:  firefox

Started child process for env:  chrome

 firefox 	Test Test Suite
 firefox 	===============
 ...
 firefox
 firefox 	OK. 3 assertions passed. (542 ms)
 firefox
 firefox 	OK. 7 total assertions passed. (4429 ms)

 chrome 	Test Test Suite
 chrome 	===============
 ...
 chrome
 chrome 	OK. 3 assertions passed. (1108 ms)
 chrome
 chrome 	OK. 7 total assertions passed. (4790 ms)
```

Production
=

Webpack bundles all the assets in production mode and Gulp creates unique file names for caching w/ `NODE_ENV=production npm run build`

```
> NODE_ENV=production npm run build
...
Hash: a347df5e60d93385aa06
Version: webpack 1.8.9
Time: 8028ms
                                 Asset       Size  Chunks             Chunk Names
      main.a347df5e60d93385aa06.min.js     254 kB       0  [emitted]  main
    style.a347df5e60d93385aa06.min.css  629 bytes       0  [emitted]  main
  main.a347df5e60d93385aa06.min.js.map    2.44 MB       0  [emitted]  main
style.a347df5e60d93385aa06.min.css.map  111 bytes       0  [emitted]  main
   main.a347df5e60d93385aa06.min.js.gz    68.2 kB          [emitted]
    + 268 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules

> cd dist
> python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000
...
> open http://localhost:8000/
```

Resources
===========
- Forked from [here](https://github.com/shanewilson/react-webpack-example)
- [Webpack: How To](https://github.com/petehunt/webpack-howto)
- [React-Hot-Loader](http://gaearon.github.io/react-hot-loader/)