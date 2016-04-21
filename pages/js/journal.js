// This page is not currently being used, will be needed for GR5
/*
var load_journal = function() {
  my_journal.forEach(function(entry) {
    temp = document.createElement('div');
    temp.className = 'entry';
    temp.innerHTML = entry;
    document.getElementById('journal').appendChild(temp);
  });
};
*/

/*
// Below are Angular things when we start using it
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


var loadJournal = function(){

var journalVar="";
journalVar += " <h1>";
journalVar += "   My Journal Entries";
journalVar += " <\/h1>";
journalVar += "  <div id = \"journal\">";
journalVar += "  <table class=\"ui sortable striped table\">";
journalVar += "    <thead>";
journalVar += "      <tr>";
journalVar += "        <th>Date<\/th>";
journalVar += "        <th>Entry<\/th>";
journalVar += "      <\/tr>";
journalVar += "    <\/thead>";
journalVar += "    <tbody>";

for(i=0; i<my_journal.length; i++){

var entry = my_journal[i];
journalVar += "      <tr id=\"entry" + (i+1) +"\">";
journalVar += "        <td class=\"date\">"+ (Number(entry.date.getMonth())+1)+"\/"+entry.date.getDate()+"\/"+entry.date.getFullYear()+"<\/td>";
journalVar += "        <td>"+ entry.text +"<\/td>";
journalVar += "        <td><\/td>";
journalVar += "      <\/tr>";
}

journalVar += "    <\/tbody>";
journalVar += "  <\/table>";

//journalVar +=  "<button class=\"ui red button right floated\" id=\"home\">Home<\/button>";
journalVar += "<\/div>";

return journalVar;

}

//var journal_functions = function(){
//doesn't work without some plugin? mentioned on the semantic site
//$('.sortable.table').tablesort();

//   $('#home').click(function(e) {
//            console.log("click");
//              playContent(currentlyPlaying);
//        });

//};





