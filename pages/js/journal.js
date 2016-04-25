var playEntry = function(i) {
  playContent(my_journal[i-1]);
  $('#journalModal').modal('hide');
}

var loadJournal = function(){

var journalVar="";
journalVar += " <h1>";
journalVar += "   My Journal Entries";
journalVar += " <\/h1>";
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
journalVar += "      <tr id=\"entry" + (i+1) +"\" onclick='playEntry(" + (i+1) +")'>";
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





