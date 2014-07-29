
var seneca = require('seneca')()
      .use('beanstalk-transport')
      .use('../salestax-plugin')
      .listen({type:'beanstalk'});
