'use strict';

try {
  module.exports = require('pkg-prebuilds')(
    __dirname,
    require('./binding-options'),
  );
} catch (e) {
  module.exports = require('./fallback');
}
