(function(){
    function CollectionCtrl(){
        console.log("Collection controller: ");
        this.albums = [];
        for(var i = 0; i < 12; i++){
            console.log("pushing album into array");
            this.albums.push(angular.copy(albumPicasso));
        }
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();
