#!/usr/bin/env node
var Ip = require('ip')
  , addr = Ip.address()

if (!addr)
  process.exit(1)

console.log(addr)
