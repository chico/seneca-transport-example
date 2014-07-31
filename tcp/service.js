
var seneca = require('seneca')()
      .use('../salestax-plugin')
      .listen({type:'tcp'});
