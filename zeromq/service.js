
var zmk_transport = require('seneca-zmq-transport');

var seneca = require('seneca')()
      .use(zmk_transport)
      .use('../salestax-plugin')
      .listen({type:'zmq'});
