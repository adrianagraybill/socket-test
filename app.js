'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://WesElasticBeanstalk-env.s2phgv2xgw.us-west-2.elasticbeanstalk.com');

const faker = require('faker');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},3000);
