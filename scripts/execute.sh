rm -rf dist
rm src/PhoneNumberMetadata.xml
rm src/PhoneNumberMetadataForTesting.xml

node src/generate.js
cp src/libphonenumber.js libphonenumber/javascript/i18n/phonenumbers/demo.js
cp src/PhoneNumberMetadata.xml libphonenumber/resources/PhoneNumberMetadata.xml
cp src/PhoneNumberMetadataForTesting.xml libphonenumber/resources/PhoneNumberMetadataForTesting.xml

ant -f libphonenumber/java/build.xml build-js-metadata
ant -f libphonenumber/javascript/build.xml compile-demo

mkdir dist
node src/minify.js