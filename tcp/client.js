
var util = require('util');

var seneca = require('seneca')()
      .client({type:'tcp'});

function print(err,result) {
  if(err) return console.error(err);
  console.log(util.inspect(result).replace(/\n/g,' '));
}

seneca.act({plugin:'salestax', cmd:'salestax', net:100, country:'IE'}, print);
seneca.act({plugin:'salestax', cmd:'salestax', net:100, country:'UK'}, print);

setTimeout(function(){process.exit();}, 500);