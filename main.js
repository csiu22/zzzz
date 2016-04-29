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
    favorites = [];
    fav_dict = {};
    my_journal = [];
    entries_to_delete = [];
    backStack = [];
    forwardStack = [];
    playList = [];

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
          if (content["text"] == "") {
            console.log("new entry");
            insert += //"<div class='activityIcon'><i class='large edit icon'></i></div><h2>"+ content.title+"</h2>" +
                     //'<h2 class="ui header"> <i class="edit icon"></i> <div class="content">'+ content.title + '</div> </h2>' +
                  // '<textarea autofocus> </textarea>'+
                   //'<textarea id="response"> </textarea>' +

                   '<div class="ui form" id="response2"> <div class="field" > <textarea id="response" rows="2" autofocus></textarea> </div> </div>' +
                   '<br><button class="ui button" id="btnSaveEntry"> <i class="save icon"></i> Save to Journal </button>' +
                   '<button class="ui button" id="btnPastEntries"> <i class="edit icon"></i> View My Journal </button>' +
                   '<br> <span id="saveMessage" style="color:green; display:none"> successfully saved! </span>' ;
          } else if (content["copied"]) {
            insert += //"<div class='activityIcon'><i class='large edit icon'></i></div><h2>"+ content.title+"</h2>" +
                   //'<h2 class="ui header"> <i class="edit icon"></i> <div class="content">'+ content.title + '</div> </h2>' +
                  // '<textarea autofocus> </textarea>'+
                   //'<textarea id="response"> </textarea>' +

                   '<div class="ui form" id="response2"> <div class="field" > <textarea id="response" rows="2" autofocus>' + content["text"] + '</textarea> </div> </div>' +
                   '<br><button class="ui button" id="btnSaveEntry"> <i class="save icon"></i> Save to Journal </button>' +
                   '<button class="ui button" id="btnPastEntries"> <i class="edit icon"></i> View My Journal </button>' +
                   '<br> <span id="saveMessage" style="color:green; display:none"> successfully saved! </span>' ;

            console.log("COPIED");
            content["copied"] = false;
          } else {
            var ind = my_journal.indexOf(content);
            insert +=
                   //'<div class="ui form" id="response2"> <div class="field" > <textarea id="response" rows="2" autofocus></textarea> </div> </div>' +
                   '<h3> On ' + (Number(content.date.getMonth())+1)+"\/"+content.date.getDate()+"\/"+content.date.getFullYear() + ' you wrote: </h3><br>' +
                   content["text"] +
                   '<br>'+
                   //'<br><button class="ui button" id="btnCopyEntry"> <i class="copy icon"></i> Copy Entry </button>' +
                   '<br><button class="ui button" onclick="copyEntry(' + ind + ')"> <i class="copy icon"></i> Copy Entry </button>' +
                   '<button class="ui button" onclick="removeEntry(' + ind + ', true)"> <i class="trash outline icon"></i> Delete Entry </button>' +
                   '<br> <span id="saveMessage" style="color:green; display:none"> successfully saved! </span>' ;
          }
      } else if(content.type === "tips_quotes"){
            //display tips and quotes
            insert = "<h2>"+ content.title+"</h2>";
            insert += "<br><h4>"+ content.text + "<h4>";
      } else{
            //throw error
      }

      /*
        until this is developed further
      */
      document.getElementById("content").innerHTML=insert;
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




