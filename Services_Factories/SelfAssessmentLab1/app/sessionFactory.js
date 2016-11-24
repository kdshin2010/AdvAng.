angular.module('app').factory('sessionFactory', ['$window', 'formatFactory', sessionFactory]);

    function sessionFactory($window, formatFactory) {
   
            return {
                save: save,
                get: get,
                clear: clear
            }


        function save(key, value) {
            var formattedValue = formatFactory.format(value);
            $window.sessionStorage.setItem(key, formattedValue);
        }

        function get(key) {
            return $window.sessionStorage.getItem(key);
        }

        function clear(){
            $window.sessionStorage.clear();
            
        }

    }