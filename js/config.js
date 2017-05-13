(function () {
    angular
        .module('hive-weather')
        .config(['$sceDelegateProvider', delegateProvider])
        .config(['$interpolateProvider', interpolateProvider]);

    function delegateProvider ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://autocomplete.wunderground.com/**'
        ]);
    }

    function interpolateProvider($interpolateProvider) {
        return $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }
})()