var Albums = require('./albums');
var Artists = require('./artists');
// var Tracks = require('./tracks');
// var Search = require('./search');

module.exports = function spotifySdk(){
    this.baseUri = 'https://api.spotify.com/v1';

    this.albums = new Albums(this);
    this.artists = new Artists(this);
    // this.tracks = new Tracks(this);
    // this.search = new Search(this);
};
