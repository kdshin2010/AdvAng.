/*Directive lifecycle starts and ends within AngularJS bootstrapping process- before page renders
    Four functions execute if directive is defined
        -compile, controller, pre-link, post-link
        
            compile- enables directive to manipulate DOM before it is compiled and linked
                -allows add/remove/change directives as well as add/remove.change other DOM Elements
            
            controller- directive communication, sibling and child directives can request controller of siblings and parents to communicate

            pre-link- allows private $scope manipulation before post-link process

            post-link - primary "workhorse" method of a directive
*/

//Exmaple

.directive("directiveName", function() {
    return {
        controller: function() {
            //controller code
        },
        compile: function() {
            //compile code
            return {
                pre: function() {
                    //pre linkcode
                }, 
                post: function(){
                    //post link code
                }
            }
        };
    }
})

// not all functions are necessary, main are controller and post link

.directive("directiveName", function() {
    return {
        controller: function() {
            //controller code
        },
        link: function() {
            //compile code

        }
    }
});

//execution order is important , especially execution relative to rest of Angular JS app
/* Execution orders
    compile 
        =parent 
        =child  
        =grandchild

    Controller & pre link  
        -Controller Function -parent   
        -Pre Link Function - parent
        =Controller Function - child
        =Pre Link Function - child
        -Controller - grandchild
        -Pre link - grandchild

    Post-link   
        -Post Link Function - grandchild
        -Post Link Function- child
        -Post Link function - parent
*/

//Compilation Phase
    //Attach event listeners to the dom
    //parent to child direction
    //after complete cannot add any more directives

//Controller Phase 
    //after controller is called --> $scope avail and used
    //$element injected into controller contains compiled template
    //Excludes transcluded child content (transcluded content is content between start and end HTML tag on which directive is applied)
    //Controller of directive should not modifly DOM   
        //violates purpose of controller
        //transcluded child has not been added to DOM yet
    //Controller is best used to facilitate directive communication, create object with properties and methods used by sibling and child directives

//Prelink Phase 
    //Examaple use of per-link --> ng-init
    //not passed into directivces, can be used to execute code that modifies $scope of directive
    //Can be used to execute code that modifes $scope of its directive

//PostLink function 
    //most commonly implemented in custom Angular directives    
    //here is where the DOM is usually manipulated
    //$scope is availablem controller object for parent directives can be used, transclude functions can be run
    //New directives cannot be added to the DOM (not compiled)
    //DOM maniupulations must be done using DOM functions


//** Once post link functions are executed, $scope is applied to the compiled and linked DOM structure