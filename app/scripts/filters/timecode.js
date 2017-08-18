(function(){
    function timecode(SongPlayer){
        return function(seconds){
            return buzz.toTimer(Number.parseFloat(seconds));
        };
    }

    angular
        .module('blocJams')
        .filter('timecode', ['SongPlayer', timecode]);
})();
