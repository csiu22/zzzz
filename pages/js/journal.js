var playEntry = function(i) {
  playContent(my_journal[i]);
  $('#journalModal').modal('hide');
}

removeEntry = function(i, deleteImmediately) {
  console.log("delete entry " + i);
  entries_to_delete.push(i);
  $("#entry"+i).remove();

  if (deleteImmediately) {
    my_journal.splice(i, 1)
    shuffle();
  }
}

deleteEntries = function() {
  while (entries_to_delete.length > 0) {
    var e = entries_to_delete.pop()
    my_journal.splice(e, 1)
  }
}

var loadJournal = function(){

var journalVar="";
// journalVar += " <h1>";
// journalVar += "   My Journal Entries";
// journalVar += " <\/h1>";
journalVar += "  <div id = \"journal\">";
journalVar += "  <table class=\"ui striped table\">";
journalVar += "    <thead>";
journalVar += "      <tr>";
journalVar += "        <th>Date<\/th>";
journalVar += "        <th>Entry<\/th>";
journalVar += "      <\/tr>";
journalVar += "    <\/thead>";
journalVar += "    <tbody>";

for(i=0; i<my_journal.length; i++){

var entry = my_journal[i];
journalVar += "      <tr class='entry' id=\"entry" + i +"\" >";
journalVar += "        <td class=\"date\" onclick='playEntry(" + i +")'>"+ (Number(entry.date.getMonth())+1)+"\/"+entry.date.getDate()+"\/"+entry.date.getFullYear()+"<\/td>";
journalVar += "        <td onclick='playEntry(" + i +")'>"+ entry.text +"<\/td>";
journalVar += "        <td><i class='large trash outline icon' onclick='deleteEntry(" + i + ")'></i><\/td>";
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





