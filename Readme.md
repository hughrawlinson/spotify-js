# Spotify Web API Javascript SDK
This is a quick Node SDK for the Spotify Web API. Currently only the endpoints that don't require authentication are implemented. Please, feel free to contribute.

## Todo
* Implement user authentication
* Write better docs representative of the API

## Usage
```javascript
var spotify = require('spotifySdk');

var album = spotify.albums('0sNOF9WDwhWunNAHPD3Baj');
console.log(album.name); // "She's So Unusual"
console.log(album.artists[0].name); // "Cyndi Lauper"
```

## Docs
These are the implemented endpoints, and the documentation for the raw API corresponding to each one.

### Album
Endpoint for albums
* Endpoint: /albums
* Functions:
    * GET single
        * params: id
        * url: /{id}
    * GET multiple
        * params: multiple ids
        * url: ?ids={csv ids}
    * GET tracks
        * params:
            * id
            * limit _[optional]_
            * offset _[optional]_
        * url: /{id}/tracks

### Artist
* Endpoint: /artists
* Functions:
    * GET single
        * params: id
        * url: /{id}
    * GET multiple
        * params: multiple ids
        * url: ?ids={csv ids}
    * GET albums
        * params:
            * id
            * album\_type _[optional]_
            * country _[optional]_
            * limit _[optional]_
            * offset _[optional]_
        * url: /{id}/albums
    * GET top-tracks
        * params:
            * id
            * country _[optional]_
        * url: /{id}/top-tracks


### Track
* Endpoint:
* Functions:
    * GET single
        * params: id
        * url: /{id}
    * GET multiple
        * params: multiple ids
        * url: ?ids={csv ids}

### Search
* Endpoint: /search
* params:
    * q
    * type
    * limit _[optional]_
    * offset _[optional]_
