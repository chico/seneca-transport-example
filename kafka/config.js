
var host = 'localhost',
    port = 2181,
    namespace = 'seneca',
    requestTopic = 'request',
    responseTopic = 'response';

var options = {
      zkroot: host + ':' + port,
      namespace: namespace,
      start: 'config'
    };
var mcb = require('microbial')(options);

var resetConfig = function(done) {
  mcb.deregisterAll(namespace, requestTopic, function(err) {
    if (err) {console.log(err); return done(err);}

    mcb.deregisterAll(namespace, responseTopic, function(err) {
      if (err) {console.log(err); return done(err);}
      done(null);
    });
  });
}

var updateConfig = function(done) {
  var config = mcb.blankConfig();
  mcb.addBrokerToConfig(config, host, 9092, 2000000);
  mcb.addTopicToConfig(config, requestTopic, 'queue', 1, 'roundRobin');
  mcb.addTopicToConfig(config, responseTopic, 'queue', 1, 'direct');

  console.log(JSON.stringify(config, null, 2));

  mcb.writeConfig(config, function(err) {
    if (err) {console.log(err); return done(err);}
    done(null);
  });
}

mcb.setup(function(err) {
  if (!err || (err && err.name && err.name === 'config_block_not_available')) {

    console.log('Reset config');
    resetConfig(function(err) {
      if (err) {mcb.tearDown(); return;}

      console.log('Update config');
      updateConfig(function(err) {
        mcb.tearDown();
        console.log('Done');
      });

    });
  }
  else {
    console.log(err);
  }
});
