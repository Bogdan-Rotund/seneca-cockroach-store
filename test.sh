# Only install seneca to run tests.
# There is no explicit dependency either in production or development
# because this plugin is itself a dependency of the seneca module.

if [ ! -d "./node_modules/seneca" ]; then
  npm install seneca@^0.6.5
fi
./node_modules/.bin/lab test -r console -v
