# Spotify Web API Javascript SDK
This is a quick Node SDK for the Spotify Web API. Currently only the album and artist endpoints are partially implemented. Please, feel free to contribute.

## Todo
* Implement the rest of the endpoints
* Implement user authentication
* Write docs representative of the SDK, rather than of the API

## Usage
```javascript
var s = require('spotifySdk'),
    spotify = new s();

spotify.albums.find('0sNOF9WDwhWunNAHPD3Baj',function(err, data){
    if (!err) console.log(data);
});
```

## Development
There are some notes regarding the API for use in development in a comment in this file. Any PRs are very welcome indeed.

## Thanks
This SDK was inspired by @jacobwg's [SDK for The Echo Nest API](https://www.github.com/playlist-media/theechonest), so thanks for that :)

<!-- ### Album
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
    * offset _[optional]_ -->
