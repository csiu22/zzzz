var playEntry = function(i) {
  playContent(my_journal[i]);
  if(currentlyPlaying) backStack.push(currentlyPlaying);
  currentlyPlaying = my_journal[i];
  $('#journalModal').modal('hide');
}

var goToPrompt = function(i) {
  playContent(totalContent["journalEntries"][i]);
  if(currentlyPlaying) backStack.push(currentlyPlaying);
  currentlyPlaying = totalContent["journalEntries"][i];
  $('#journalModal').modal('hide');
}

removeEntry = function(i, deleteImmediately) {
  console.log("delete entry " + i);
  entries_to_delete.push(i);
  $("#entry"+i).remove();

  if (deleteImmediately) {
    my_journal.splice(i, 1);
    currentlyPlaying = false;
    shuffle();
  }
}

deleteEntries = function() {
  while (entries_to_delete.length > 0) {
    var e = entries_to_delete.pop()
    my_journal.splice(e, 1)
  }
}

var loadJournalView = function(){

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
journalVar += "        <td><i class='large trash outline icon' onclick='removeEntry(" + i + ")'></i><\/td>";
journalVar += "        <td><\/td>";
journalVar += "      <\/tr>";
}

journalVar += "    <\/tbody>";
journalVar += "  <\/table>";

//journalVar +=  "<button class=\"ui red button right floated\" id=\"home\">Home<\/button>";
journalVar += "<\/div>";

return journalVar;

}

var loadJournalPrompts = function(){

var prompts = totalContent["journalEntries"];

var journalVar="";
journalVar += "  <div id = \"journalPrompts\">";
journalVar += "  <table class=\"ui striped table\">";
journalVar += "    <thead>";
journalVar += "      <tr>";
journalVar += "        <th>Prompt<\/th>";
journalVar += "      <\/tr>";
journalVar += "    <\/thead>";
journalVar += "    <tbody>";

for(i=0; i<prompts.length; i++){

journalVar += "      <tr class='entry' id=\"prompt" + i +"\" >";
journalVar += "        <td class=\"date\" onclick='goToPrompt(" + i +")'>"+ prompts[i].title+"<\/td>";
journalVar += "        <td><\/td>";
journalVar += "      <\/tr>";
}

journalVar += "    <\/tbody>";
journalVar += "  <\/table>";

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





