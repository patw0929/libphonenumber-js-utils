rm -rf libphonenumber
git clone --branch v`cat package.json | python -c "import sys, json; print(json.load(sys.stdin)['googleLibphonenumberVersion'])"` https://github.com/googlei18n/libphonenumber/
