(function(){
    function SongPlayer(){
        /**
        * @desc Song player empty object
        * @type {Object}
        */
        var SongPlayer = {};

        /**
        * @desc Current song
        * @type {Object}
        */
        var currentSong = null;

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song){
            if(currentBuzzObject){
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song
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
        * @function play()
        * @desc Play function called when a new song is clicked
        * @param {Object} song
        */
        SongPlayer.play = function(song){
            if(currentSong !== song){
                setSong(song);
                playSong(song);
            } else if(currentSong === song){
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
                currentBuzzObject.pause();
                song.playing = false;
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
