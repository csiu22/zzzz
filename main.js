 $(document).ready(function() {

    $(".dropdown").dropdown();
    //global variables for the entire app
    user = undefined

    categories = ["binauralBeats", "journalEntries", "tips_quotes", "ASMR", 'videos', "music", "relaxation"];
    disabled_categories = [];
    favorites = [];
    fav_dict = {};
    my_journal = [];
    entries_to_delete = [];
    backStack = [];
    forwardStack = [];
    playList = [];
    totalContent = {};

    loadContent();

    loadButtons();

    $('#loginModal').modal('show dimmer');

});

var flush_variables = function(){

    disabled_categories = [];
    categories = ["binauralBeats", "journalEntries", "tips_quotes", "ASMR", 'videos', "music", "relaxation"];
    favorites = [];
    fav_dict = {};
    my_journal = [];
    entries_to_delete = [];
    backStack = [];
    forwardStack = [];
    playList = [];
    user = undefined;

}


var getIcon = function(category) {
  if (category === "video") {
    return "video play";
  } else if (category === "journal") {
    return "edit";
  } else if (category == "tips_quotes") {
    return "newspaper";
  }

}

var copyEntry = function(i) {
  console.log(my_journal[i]);
  var temp_entry = my_journal[i];
  temp_entry["copied"] = true;
  playContent(temp_entry);
}

var login_message = function(){
  insert ='<h1 class="ui header"> <div class="content"> You are now logged out. </div> </h1>';
  insert += '<br> <div style="font-size:20px;"> Please log in to use the site.</div>';
  document.getElementById("content").innerHTML=insert;
}


var playContent = function(content){

      if (content.type === "welcome") {
        insert = '<h1 class="ui header"> <div class="content">'+ content.title + ", " + user + "."+'</div> </h1>' +
                 '<br> <div style="font-size:20px;"> Mindlessly shuffle to your heart\'s content.' +
                 '<br> Click on the <i class="tiny circular random icon"></i> to get random material. No two visits to this page will be the same </div>' ;
        document.getElementById("content").innerHTML=insert;
        return;
      }

      insert = '<h2 class="ui header"> <i class="' + getIcon(content.type) + ' icon"></i> <div class="content">'+ content.title + '</div> </h2>';
      if(content.type === "video"){

        /*
            display embedded video player
        */

      insert += //"<h2>"+ content.title+"</h2> </br> "+
                //'<h2 class="ui header"> <i class="edit icon"></i> <div class="content">'+ content.title + '</div> </h2>' +
                "<iframe width='444' height='250' src='"+content.url+"' frameborder='0' allowfullscreen> </iframe>";

      } else if (content.type === "journal"){
          /*
            display editable journal entry
          */
          if (content["text"] == "" || content["copied"]) {
            console.log("new entry");
            insert +=
                   '<div class="ui form" id="response2"> <div id="journal_field">  </div> </div>' +
                   '<br><button class="ui green button" id="btnSaveEntry" style="float:right"> <i class="save icon"></i> Save to Journal </button>' +
                   '<button class="ui teal button" id="btnPastEntries" style="float:left"> <i class="edit icon"></i> View My Journal </button>' +
                   '<br> <span id="saveMessage" style="color:green; display:none; font-size:1.05em;"> successfully saved! </span>' ;
          } else {
            var ind = my_journal.indexOf(content);
            insert +=
                   '<h3> On ' + (Number(content.date.getMonth())+1)+"\/"+content.date.getDate()+"\/"+content.date.getFullYear() + ', you wrote: </h3><h4>' +
                   content["text"] +
                   '</h4><br>'+
                   '<br><button class="ui teal button" style="float:left" onclick="copyEntry(' + ind + ')"> <i class="copy icon"></i> Copy Entry </button>' +
                   '<button class="ui red button" style="float:right" onclick="removeEntry(' + ind + ', true)"> <i class="trash outline icon"></i> Delete Entry </button>' +
                   '<br> <span id="saveMessage" style="color:green; display:none; font-size:1.05em;"> successfully saved! </span>' ;
          }
      } else if(content.type === "tips_quotes"){
            //display tips and quotes
            insert = "<h2>"+ content.title+"</h2>";
            insert += "<br><h3>"+ content.text + "</h3>";
      } else{
            //throw error
      }

      document.getElementById("content").innerHTML=insert;

      // For autofocusing on journals. Since "journal_field" isn't defined for any other content, it should be fine
      $("#journal_field").append('<textarea id="response" rows="8" cols="100" autofocus style="font-size:1.1em;">' + content["text"] + '</textarea>');
      $("#response").focus();

      /*
        until this is developed further
      */
}

var shuffle = function(){
        category_index = Math.floor(Math.random() * categories.length);
        category = categories[category_index];
        //Linda debugging
        //category="journalEntries";
        content = getContent(category);

        //make sure you aren't shuffling to the same thing
        if (currentlyPlaying != undefined) {
          if (currentlyPlaying.title == content.title) {
            shuffle();
          }
        }

        playContent(content);
        if(currentlyPlaying) {
          backStack.push(currentlyPlaying);
        }
        currentlyPlaying = content;
}

var playNext = function(){
        content = forwardStack.pop();
        backStack.push(content);
        playContent(content);
        currentlyPlaying = content;
}

var playBack = function(){
      content = backStack.pop();
      if(content){
          forwardStack.push(currentlyPlaying);
          playContent(content);
          currentlyPlaying = content;
      }
}

var getContent = function(category){
    item_list = totalContent[category];
    item_index = Math.floor(Math.random() * item_list.length);
    item = item_list[item_index];
    return item
}




