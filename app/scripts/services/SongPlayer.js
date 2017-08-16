(function(){
    function SongPlayer($rootScope, Fixtures){
        /**
        * @desc Song player empty object
        * @type {Object}
        */
        var SongPlayer = {};

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
        * @desc Album used to obtain the songlist
        * @type {Object}
        */
        var currentAlbum = Fixtures.getAlbum();

        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song){
            if(currentBuzzObject){
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function(){
                $rootScope.$apply(function(){
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });

            SongPlayer.currentSong = song
            if(!SongPlayer.currentAlbum && SongPlayer.currentSong){
                SongPlayer.currentAlbum = currentAlbum;
            }
        };

        /**
        * @function playSong
        * @desc Play currentBuzzObject and set the playing property of the current song to true
        * @param {Object} song
        */
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
        };

        /**
        * @function getSongIndex
        * @desc returns in the index of a song from the current album song list
        * @param {Object} song
        */
        var getSongIndex = function(song){
            return currentAlbum.songs.indexOf(song);
        };

        /**
        * @function stopSong
        * @desc Stops the current buzz object and sets the playing attribute of the current songs to null
        * @param {Object} song
        */
        var stopSong = function(song){
            currentBuzzObject.stop();
            song.playing = null;
        }

        /**
        * @desc Current song
        * @type {Object}
        */
        SongPlayer.currentSong = null;

        /**
<<<<<<< HEAD
=======
        * @desc Current album
        * @type {Object}
        */
        SongPlayer.currentAlbum = null;


        /**
>>>>>>> 8ebc87cda6e8b39dced52eab358965999821ce34
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        SongPlayer.currentTime = null;

        /**
        * @function play()
        * @desc Play function called when a new song is clicked
        * @param {Object} song
        */
        SongPlayer.play = function(song){
            song = song || SongPlayer.currentSong;
            if(SongPlayer.currentSong !== song){
                setSong(song);
                playSong(song);
            } else if(SongPlayer.currentSong === song){
                if(currentBuzzObject.isPaused()){
                    playSong(song);
                }
            }
        }

        /**
        * @function pause()
        * @desc Pause function called when pause button is clicked
        * @param {Object} song
        */
        SongPlayer.pause = function(song){
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };

        /**
        * @function previous()
        * @desc Skips to the previous song in the songs list
        */
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if(currentSongIndex < 0){
                stopSong(SongPlayer.currentSong)
            } else{
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        /**
        * @function next()
        * @desc Skips to the next song in the songs list
        */
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

            if(currentSongIndex > currentAlbum.songs.length - 1){
                stopSong(SongPlayer.currentSong);
            } else{
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time){
            if(currentBuzzObject){
                currentBuzzObject.setTime(time);
            }
        };

        return SongPlayer;

    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ["$rootScope", "Fixtures", SongPlayer]);
})();
