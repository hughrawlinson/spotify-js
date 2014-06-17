var s = require('../index');
require('./support/common');

var spotify = new s();

var artistID = '0LcJLqbBmaGUft1e9Mm8HV';
var artistIDs = ['0oSGxfWSnnOXhD2fKuz2Gy','3dBVyJ7JuOMt4GE9607Qin'];

describe('Single Artist', function() {
    it('should return an artist', function(done) {
        spotify.artists.find(artistID, function(err, data) {
            should.not.exist(err);

            var artist = data;

            artist.should.be.an('object');

            artist.should.have.property('id');
            artist.id.should.equal(artistID);

            artist.should.have.property('name');

            done();
        });
    });

    it('should fail with an invalid artist id', function(done){
        spotify.artists.find('invalidid', function(err, data){
            should.exist(err);
            done();
        });
    });

    it('should fail with an empty artist id', function(done){
        spotify.artists.find('', function(err, data){
            should.exist(err);
            done();
        });
    });
});

describe('Multiple Artists', function() {
    it('should return an array containing >=0 artists', function(done) {
        spotify.artists.find(artistIDs, function(err, data) {
            should.not.exist(err);

            var artists = data;

            artists.should.be.an('object');

            done();
        });
    });

    it('should return fail with empty params', function(done){
        spotify.artists.find([], function(err,data){
            should.exist(err);
            done();
        });
    });

    it('should return null for an invalid artist id', function(done){
        spotify.artists.find(artistIDs.concat('invalidid',artistID), function(err, data){
            should.not.exist(err);
            should.not.exist(data.artists[2]);
            done();
        });
    });
});

describe('Artist Albums', function() {
    it('should return a track listing', function(done) {
        spotify.artists.albums(artistID, function(err, data) {
            should.not.exist(err);
            should.exist(data);
            var albums = data;

            albums.should.be.an('object');

            albums.should.have.property('items');
            albums.should.have.property('total');

            done();
        });
    });
});
