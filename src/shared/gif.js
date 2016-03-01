'use strict';

var request = require('request');
var Promise = require('bluebird');

var endpoint = 'http://api.giphy.com/v1/gifs';
var api_key  = 'dc6zaTOxFJmzC';

module.exports = {

    getRandomGIF: function(tag){
        return new Promise(function(resolve, reject){
            request(endpoint+'/random?api_key='+api_key+'&tag='+tag, function(error, response, body){
                if(error){
                    reject(error);
                }
                if(response.statusCode != 200){
                    reject(response.statusCode);
                }

                var json = JSON.parse(body);
                resolve(json.data.image_url);
            });
        });
    }

};
