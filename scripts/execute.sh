cp src/libphonenumber.js libphonenumber/javascript/i18n/phonenumbers/demo.js
ant -f libphonenumber/javascript/build.xml compile-demo
mkdir dist
cp libphonenumber/javascript/i18n/phonenumbers/demo-compiled.js dist/libphonenumber.js
