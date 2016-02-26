'use strict';

var request = require('request');

var endpoint = 'http://api.giphy.com/v1/gifs';
var api_key  = 'dc6zaTOxFJmzC';

module.exports = {

    getRandomGIF: function(){
        request(endpoint+'/random?api_key='/api_key+'&tag=reaction', function(error, response, body){
            document.write('<img src="'+body.image_url+'" />');
        });
    }

};