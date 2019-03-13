var filterxml = require('filterxml');
var path = require('path');
var fs = require('fs');

var doctype = `
<!DOCTYPE phoneNumberMetadata [
  <!ELEMENT phoneNumberMetadata (territories)>
  <!ELEMENT territories (territory+)>
  <!ELEMENT territory (references?, availableFormats?, generalDesc, mobile?)>
  <!ELEMENT references (sourceUrl+)>
  <!ELEMENT generalDesc (nationalNumberPattern)>
  <!ELEMENT mobile (possibleLengths, exampleNumber, nationalNumberPattern)>
  <!ELEMENT sourceUrl (#PCDATA)>
  <!ELEMENT availableFormats (numberFormat+)>
  <!ELEMENT nationalNumberPattern (#PCDATA)>
  <!ELEMENT exampleNumber (#PCDATA)>
  <!ELEMENT numberFormat (leadingDigits*, format, intlFormat*)>
  <!ELEMENT format (#PCDATA)>
  <!ELEMENT intlFormat (#PCDATA)>
  <!ELEMENT possibleLengths EMPTY>

  <!ATTLIST territory id CDATA #REQUIRED>
  <!ATTLIST territory countryCode CDATA #REQUIRED>
  <!ATTLIST territory mainCountryForCode (true) #IMPLIED>
  <!ATTLIST territory preferredInternationalPrefix CDATA #IMPLIED>
  <!ATTLIST territory internationalPrefix CDATA #IMPLIED>
  <!ATTLIST territory nationalPrefix CDATA #IMPLIED>
  <!ATTLIST territory nationalPrefixForParsing CDATA #IMPLIED>
  <!ATTLIST territory nationalPrefixTransformRule CDATA #IMPLIED>
  <!ATTLIST territory preferredExtnPrefix CDATA #IMPLIED>
  <!ATTLIST territory nationalPrefixFormattingRule CDATA #IMPLIED>
  <!ATTLIST territory nationalPrefixOptionalWhenFormatting (true) #IMPLIED>
  <!ATTLIST territory carrierCodeFormattingRule CDATA #IMPLIED>
  <!ATTLIST territory mobileNumberPortableRegion (true) #IMPLIED>
  <!ATTLIST possibleLengths national CDATA #REQUIRED>
  <!ATTLIST possibleLengths localOnly CDATA #IMPLIED>
  <!ATTLIST numberFormat nationalPrefixFormattingRule CDATA #IMPLIED>
  <!ATTLIST numberFormat nationalPrefixOptionalWhenFormatting (true) #IMPLIED>
  <!ATTLIST numberFormat carrierCodeFormattingRule CDATA #IMPLIED>
  <!ATTLIST numberFormat pattern CDATA #REQUIRED>
]>
`;

var excludedMeta = [
  'leadingDigits',
  'noInternationalDialling',
  'pager',
  'personalNumber',
  'premiumRate',
  'sharedCost',
  'tollFree',
  'uan',
  'voicemail',
  'voip', 
]

module.exports = async function() {
  try {
    var xmlPhoneNumberMetadata =
    await fs.readFileSync(path.resolve(__dirname, '../libphonenumber/resources/PhoneNumberMetadata.xml'));
    filterxml(xmlPhoneNumberMetadata, excludedMeta, {}, async function (err, xmlOut) {
      if (err) { throw err; }
     
      const doctypeXml = xmlOut.replace('<!DOCTYPE phoneNumberMetadata>', doctype);
      await fs.writeFileSync(path.resolve(__dirname, './PhoneNumberMetadata.xml'), doctypeXml);
      console.log('Successfully generated metadata!');
    });

    var xmlPhoneNumberMetadataForTesting =
    await fs.readFileSync(path.resolve(__dirname, '../libphonenumber/resources/PhoneNumberMetadataForTesting.xml'));
    filterxml(xmlPhoneNumberMetadataForTesting, excludedMeta, {}, async function (err, xmlOut) {
      if (err) { throw err; }
      await fs.writeFileSync(path.resolve(__dirname, './PhoneNumberMetadataForTesting.xml'), xmlOut);
      console.log('Successfully generated metadatafortesting!');
    });
  } catch(error) {
    console.error('Failed to generate meatadata' + error);
  }
  
}();