
var seneca = require('seneca')()
      .use('kafka-transport', {
      	kafka: {namespace: 'seneca', group: 'seneca', requestTopic: 'request', responseTopic: 'response'},
        microbial: {zkroot: 'localhost:2181', namespace: 'seneca', start: 'all'}
      })
      .use('../salestax-plugin')
      .listen({type:'kafka'});
