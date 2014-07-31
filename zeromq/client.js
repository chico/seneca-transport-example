
var zmk_transport = require('seneca-zmq-transport');

var util = require('util');

var seneca = require('seneca')()
      .use(zmk_transport)
      .client({type:'zmq'});

function print(err,result) {
  if(err) return console.error(err);
  console.log(util.inspect(result).replace(/\n/g,' '));
}

seneca.ready(function(){
  var s = this
  setTimeout(function(){
    s.act({plugin:'salestax', cmd:'salestax', net:100, country:'IE'}, print);
		s.act({plugin:'salestax', cmd:'salestax', net:100, country:'UK'}, print);
  }, 200)
})

setTimeout(function(){process.exit();}, 500);