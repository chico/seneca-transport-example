
var port = (process.argv[2]) ? parseInt(process.argv[2], 10) : 10101;

var seneca = require('seneca')()
      .use('../salestax-plugin')
      .use(function () {
      	// loadbalance pings this tcp transport to see if it's up
		    this.add({role: 'transport', cmd:'ping'}, function (args, cb) {cb();});
		  })
      .listen({type:'tcp', port:port});
