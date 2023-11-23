rm -rf dist
rm src/PhoneNumberMetadata.xml
rm src/PhoneNumberMetadataForTesting.xml

node src/generate.js
cp src/libphonenumber.js libphonenumber/javascript/i18n/phonenumbers/demo.js
cp src/PhoneNumberMetadata.xml libphonenumber/resources/PhoneNumberMetadata.xml
cp src/PhoneNumberMetadataForTesting.xml libphonenumber/resources/PhoneNumberMetadataForTesting.xml

mkdir dist
node src/compiler.js
