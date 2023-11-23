const Compiler = require("google-closure-compiler").compiler;

const compiler = new Compiler({
  js: [
    "src/libphonenumber.js",
    "node_modules/google-closure-library/**.js",
    "libphonenumber/javascript/i18n/phonenumbers/**.js",
    "!libphonenumber/javascript/i18n/phonenumbers/demo.js",
    "!libphonenumber/javascript/i18n/phonenumbers/demo-compiled.js",
    "!libphonenumber/javascript/i18n/phonenumbers/metadatafortesting.js",
    "!libphonenumber/javascript/i18n/phonenumbers/metadatalite.js",
    "!libphonenumber/javascript/i18n/phonenumbers/regioncodefortesting.js",
    "!libphonenumber/javascript/i18n/phonenumbers/**_test.js",
  ],
  js_output_file: "dist/libphonenumber.js",
  entry_point: "goog:i18n.phonenumbers.demo",
  compilation_level: "ADVANCED_OPTIMIZATIONS",
  output_wrapper: "(function(){%output%})();",
  compilation_level: "ADVANCED",
});

compiler.spawnOptions = { stdio: "inherit" };

compiler.run((exitCode) => {
  process.exitCode = exitCode;
});
