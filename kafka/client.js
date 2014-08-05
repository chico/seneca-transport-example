
var util = require('util');

var seneca = require('seneca')()
      .use('kafka-transport', {
      	kafka: {namespace: 'seneca', group: 'seneca', requestTopic: 'request', responseTopic: 'response'},
        microbial: {zkroot: 'localhost:2181', namespace: 'seneca', start: 'all'}
      })
  		.client({type:'kafka'});

function print(err,result) {
  if(err) return console.error(err);
  console.log(util.inspect(result).replace(/\n/g,' '));
}

seneca.ready(function(){
  var s = this;
  setTimeout(function() {
    s.act({plugin:'salestax', cmd:'salestax', net:100, country:'IE'}, print);
		s.act({plugin:'salestax', cmd:'salestax', net:100, country:'UK'}, print);
  }, 500);
});

setTimeout(function(){process.exit();}, 5000);