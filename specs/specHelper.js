const { use, expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

require('./fakeLocalStorage');

use(sinonChai);

global.expect = expect;
global.sinon = sinon;
