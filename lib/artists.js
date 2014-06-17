var utils = require('./utils');
var request = require('request');

module.exports = function Artists(sdk){
    this.find = function(options,callback){
        var endpoint = '/artists';
        this.id='';
        this.ids='';
        if (typeof(options)==='string'){
            endpoint += '/';
            this.id=options;
        }
        else if(typeof(options)==='object'){
            this.ids = options.join(',');
            endpoint += '?ids=';
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

    this.albums = function(options, callback){
        var endpoint = '/artists/';
        this.id=options;
        var url = sdk.baseUri+endpoint+this.id+'/albums';
        request({
            url:url,
            json:true
        }, function(err, r, data){
            if(data!==undefined){
                if(data.error !== undefined){
                    err = new Error(data.error.status + ' ' + data.error.message);
                }
            }
            callback(err,data);
        });
    };
};
