# webpack-redux-boilerplate

Starter code/configuration for a node-server-backed application using webpack as a build system and react+redux as the front end framework.

## Node Server

A simple Express node server is used to serve the starter template and also server all other public assets.

## Application

Pretty minimal at the moment. Contains two separate components, TodoApp and UserApp, purely to show the workings of having two reducers within Redux. Todos can be added and removed. And "users"
can be retrieved which just generates and random ID.

## WebPack

Webpack has been set up to support a number of features

+ Runs code through BabelJS to do ES6 and ES7 transforms
+ Compiles Sass code and live-reloads all CSS changes
+ Supports React Hot Loader for live reloading of React components while preserving state
