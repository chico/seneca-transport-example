
var _ = require('underscore');

module.exports = function( options ) {

  var seneca = this;
  var plugin = 'salestax';

  seneca.add({plugin:plugin, cmd:'salestax'}, cmd_salestax);
  seneca.add({plugin:plugin, cmd:'salestax',country:'IE'}, cmd_salestax_IE);
  seneca.add({plugin:plugin, cmd:'salestax',country:'UK'}, cmd_salestax_UK );

  function cmd_salestax(args,callback){
    var rate = null == args.rate ? 0 : args.rate;
    var total = args.net * (1 + rate);
    callback(null, {total:total, rate:rate});
  }

  function cmd_salestax_IE(args,callback){
    var rate = 0.23;
    seneca.act({plugin:plugin,cmd:'salestax',rate:rate, net:args.net},
                add_fields(args,callback));
  }

  function cmd_salestax_UK(args,callback){
    var rate = 0.20;
    seneca.act({plugin:plugin,cmd:'salestax',rate:rate, net:args.net},
                add_fields(args,callback));
  }

  function add_fields(args,callback){
    return function(err,result){
      callback(err, _.extend(result, {
        country:args.country,
        state:args.state,
        city:args.city,
        county:args.county
      }));
    }
  }

  return {
    name:'salestax'
  };

};
