var load_journal = function() {
  my_journal.forEach(function(entry) {
    temp = document.createElement('div');
    temp.className = 'entry';
    temp.innerHTML = entry;
    document.getElementsByTagName('body')[0].appendChild(temp);
  });
};

/*
//var my_journal = [];
var get_journal = function() {
  return my_journal;
}

window.myVar = {my_journal: []};
var myVarWatch = (function() {
  var watches = {};

  return {
      watch: function(callback) {
          var id = Math.random().toString();
          watches[id] = callback;

          // Return a function that removes the listener
          return function() {
              watches[id] = null;
              delete watches[id];
          }
      },
      trigger: function() {
          for (var k in watches) {
              watches[k](window.myVar);
          }
      }
  }
})();


var app = angular.module('journalApp', []).controller('Ctrl', function($scope) {
        var unbind = myVarWatch.watch(function(newVal) {
            console.log("the value changed!", newVal);
        });

        // Unbind the listener when the scope is destroyed
        $scope.$on('$destroy', unbind);
    });

// creates the angular directive
app.directive("journal", function() {

  // controller for the directive
  var journalController = function($window, $scope) {
    // to avoid conflicts with 'this' in callback functions
    var controller = this;

    this.journal = get_journal();

    controller.hello = function() {
      console.log("journal length " + controller.journal.length);
    }

    controller.isTrue = function() {
      return true;
    }
  };

  return {
    controller: journalController,
    controllerAs: "controller", // this is how the controller will be referenced in the directive
    scope: true,
    // Using ` allows us to have a string that spans multiple lines!
    template: `	<h1> My Journal Entries </h1>
      <div class="entry" ng-repeat="entry in controller.journal"> hello </div>
<button class="ui button"  ng-click="controller.hello()"> Hello </button>

      `
  };
});
*/
