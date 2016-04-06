// creates the angular application
var app = angular.module('journalApp', []);

// creates the angular directive
// notice that the directive name is ticTacToe, but in HTML you will reference the tag as <tic-tac-toe></tic-tac-toe>
app.directive("journal", function() {


  // controller for the directive
  var menuSelectionController = function($window, $scope) {
    // to avoid conflicts with 'this' in callback functions
    var controller = this;

    this.currentGame = null;

    controller.hello = function() {
      console.log("hello world");
    }

    controller.isTrue = function() {
      return true;
    }
  };

  return {
    controller: menuSelectionController,
    controllerAs: "controller", // this is how the controller will be referenced in the directive
    scope: true,
    // Using ` allows us to have a string that spans multiple lines!
    template: `	<h1> My Journal Entries </h1>`
  };
});
