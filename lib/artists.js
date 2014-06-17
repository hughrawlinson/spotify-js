var utils = require('./utils');
var request = require('request');

module.exports = function Artists(sdk){
    this.find = function(options,callback){
        var endpoint = '';
        this.id='';
        this.ids='';
        if (typeof(options)==='string'){
            endpoint = '/artists/';
            this.id=options;
        }
        else if(typeof(options)==='object'){
            this.ids = options.join(',');
            endpoint = '/artists?ids=';
        }
        else{
            callback(new Error('Invalid argument type'));
        }
        var uri = sdk.baseUri+endpoint;
        //render ids
        var url = uri+(this.id.length===0?this.ids:this.id);
        request({
            url:url,
            json:true
        },function(err, r, data){
            if(data.error!==undefined ){
                err = new Error(data.error.status + ' ' + data.error.message);
            }
            callback(err,data);
        });
    };
};
