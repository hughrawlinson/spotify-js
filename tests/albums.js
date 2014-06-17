var s = require('../index');
require('./support/common');

var spotify = new s();

var albumID = '0sNOF9WDwhWunNAHPD3Baj';
var albumIDs = ['41MnTivkwTO3UUJ8DrqEJJ','6JWc4iAiJ9FjyK0B59ABb4','6UXCm6bOO4gFlDQZV5yL37'];

describe('Single Album', function() {
    it('should return an album', function(done) {
        spotify.albums.find(albumID, function(err, data) {
            should.not.exist(err);

            var album = data;

            album.should.be.an('object');

            album.should.have.property('id');
            album.id.should.equal(albumID);

            album.should.have.property('album_type');
            album.should.have.property('name');

            done();
        });
    });

    it('should fail with an invalid album id', function(done){
        spotify.albums.find('invalidid', function(err, data){
            should.exist(err);
            done();
        });
    });

    it('should fail with an empty album id', function(done){
        spotify.albums.find('', function(err, data){
            should.exist(err);
            done();
        });
    });
});

describe('Multiple Albums', function() {
    it('should return an array containing >=0 albums', function(done) {
        spotify.albums.find(albumIDs, function(err, data) {
            should.not.exist(err);

            var albums = data;

            albums.should.be.an('object');

            done();
        });
    });

    it('should return fail with empty params', function(done){
        spotify.albums.find([], function(err,data){
            should.exist(err);
            done();
        });
    });

    it('should return null for an invalid album id', function(done){
        spotify.albums.find(albumIDs.concat('invalidid',albumID), function(err, data){
            should.not.exist(err);
            should.not.exist(data.albums[3]);
            done();
        });
    });
});

describe('Album Tracks', function() {
    it('should return a track listing', function(done) {
        spotify.albums.tracks(albumID, function(err, data) {
            should.not.exist(err);
            should.exist(data);
            var album = data;

            album.should.be.an('object');

            album.should.have.property('items');
            album.should.have.property('total');
            album.total.should.equal(album.items.length);

            done();
        });
    });
});
