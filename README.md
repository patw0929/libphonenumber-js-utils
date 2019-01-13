# Libphonenumber-js-utils &middot; [![npm version](https://badge.fury.io/js/libphonenumber-js-utils.svg)](https://www.npmjs.com/package/libphonenumber-js-utils) [![Build Status](https://travis-ci.org/patw0929/libphonenumber-js-utils.svg)](https://travis-ci.org/patw0929/libphonenumber-js-utils)

# What is it?
This repo is a compiled and minified version of the utilities functions from the [googlei18n's libphonenumber](https://github.com/googlei18n/libphonenumber) library.
The functions are exposed to `window.intlTelInputUtils` inside browser environment.

# How to use?
* Add `libphonenumber-js-utils` to the package dependency.
* `import 'libphonenumber-js-utils';` in your code.
* The functions will be available in `window.intlTelInputUtils`.

# Features inside it :
Name | Type | Description
-----|------|---------------
formatNumber | Function | Format Phone number according to country
getExampleNumber | Function | Get example phonenumber of a country
getExtension | Function | 
getNumberType | Function | Get the type of number entered like `FIXED_LINE`, `MOBILE`, etc.
getValidationError | Function | Get the validation error
isValidNumber | Function | Check if a number is valid for a country
numberFormat | Enum | **Possible Values:**<br>&bull; `NATIONAL` <br>&bull; `INTERNATIONAL`
numberType | Enum | **Possible Values:**<br>&bull; `FIXED_LINE` <br>&bull; `MOBILE` <br>&bull; `FIXED_LINE_OR_MOBILE` <br>&bull; `TOLL_FREE` <br>&bull; `PREMIUM_RATE` <br>&bull; `SHARED_COST` <br>&bull; `VOIP` <br>&bull; `PERSONAL_NUMBER` <br>&bull; `PAGER` <br>&bull; `UAN` <br>&bull; `VOICEMAIL` <br>&bull; `UNKNOWN`
validationError | Enum | **Possible Values:**<br>&bull; `IS_POSSIBLE` <br>&bull; `INVALID_COUNTRY_CODE` <br>&bull; `TOO_SHORT` <br>&bull; `TOO_LONG` <br>&bull; `NOT_A_NUMBER`

# How to build it?
### Setup :
Checkout closure-library, closure-compiler, closure-linter and python-gflags next to libphonenumber:

* `git clone https://github.com/googlei18n/libphonenumber/`

* `git clone https://github.com/google/closure-library/`

* `git clone https://github.com/google/closure-compiler.git`

* `git clone https://github.com/google/closure-linter.git`

* `git clone https://github.com/google/python-gflags.git`

### Compile :
1. Build Closure's compiler.jar:
  `mvn -DskipTests`
2. Copy the contents of 
`src/libphonenumber.js` to `libphonenumber/javascript/i18n/phonenumbers/demo.js`.

3. Compile the demo.js and all its dependencies to one file: `demo-compiled.js`:
  `ant -f javascript/build.xml compile-demo`

3. Run the compiled demo: `javascript/i18n/phonenumbers/demo-compiled.html`

# Contributors :
[![@superhit0](https://avatars.githubusercontent.com/superhit0?size=50)](https://github.com/superhit0) | [![@patw0929](https://avatars.githubusercontent.com/patw0929?size=50)](https://github.com/patw0929) | [![@nutboltu](https://avatars.githubusercontent.com/nutboltu?size=50)](https://github.com/nutboltu)
----|-----|-----
