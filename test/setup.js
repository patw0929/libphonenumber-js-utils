const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getJSContent = () => (
  fs.readFileSync(path.resolve(__dirname, '../dist/libphonenumber.js')).toString()
);

const options = {
  url: 'http://localhost',
  runScripts: 'dangerously'
};

const dom = new JSDOM(`<!doctype html><html><body><script>${getJSContent()}</script></body></html>`, options);

const { window } = dom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);
