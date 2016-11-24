//Example how directives are constructed

app.directive('thisDirective', function() {
	return {
		restrict: 'A',
		require: '^anotherDirective',
		scope: {
			value1: '@'
		},
		template :'<div><h4>Template for directive {{thisController.directivename}}</h4></div>',
		link: function(scope, elem, attrs) {

		}
		controller: function() {
			this.directivename = 'thisDirective'
		}
		controllerAs: 'thisController'

	}

});