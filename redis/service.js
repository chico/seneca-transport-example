
var seneca = require('seneca')()
      .use('redis-transport')
      .use('../salestax-plugin')
      .listen({type:'redis'});
