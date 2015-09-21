/* Copyright (c) 2010-2014 Richard Rodger, MIT License */

"use strict";

var seneca = require('seneca')
var shared = require('seneca-store-test')
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var describe = lab.describe;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

var si = seneca({log:'silent'})
si.use(require('../cockroach-store.js'))

si.__testcount = 0

describe('cockroach', function(){
  shared.basictest({
    seneca: si,
    script: lab
  })
})
