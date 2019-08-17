'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');

const socket = io.connect('http://WesElasticBeanstalk-env.s2phgv2xgw.us-west-2.elasticbeanstalk.com');

socket.on('the-bird', theword);
