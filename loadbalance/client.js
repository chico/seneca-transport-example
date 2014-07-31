
var util = require('util');

var loadbalance_transport = require('seneca-loadbalance-transport');

var workers = {workers:[{type: 'tcp', port: 10101}, {type: 'tcp', port: 10102}]};

var seneca = require('seneca')()
			.use(loadbalance_transport, workers)
      .client({type:'loadbalance-transport'});

function print(err,result) {
  if(err) return console.error(err);
  console.log(util.inspect(result).replace(/\n/g,' '));
}

seneca.act({plugin:'salestax', cmd:'salestax', net:100, country:'IE'}, print);

// In this example we need to do the second call a little later
// so that the loadbalancer does not pick the same worker
setTimeout(function(){
	seneca.act({plugin:'salestax', cmd:'salestax', net:100, country:'UK'}, print);
}, 100);

setTimeout(function(){process.exit();}, 500);