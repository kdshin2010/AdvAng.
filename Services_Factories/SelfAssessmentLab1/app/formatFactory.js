(function() {
    'use strict';
    angular
        .module('app')
        .factory('formatFactory', formatFactory);
    
    function formatFactory() {

        return {
            format: format
        }

        function format(input) {
            if ((input.length % 2) == 0 ) {
                return input.toUpperCase();
            } else {
                return input.toLowerCase();
            }
        }

    }


})();