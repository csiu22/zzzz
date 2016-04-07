 $(document).ready(function() {

    //global variables for the entire app

    categories = ["binauralBeats", "journalEntries", "tips_quotes", "ASMR", 'videos', "music", "relaxation"];
    disabled_categories = [];
    favorites = [];
    my_journal = [];
    backStack = [];
    forwardStack = [];
    playList = [];
    totalContent = {};

    loadContent();
    currentlyPlaying = welcome_content; // let's create welcome content for the first screen
    playContent(currentlyPlaying);

    loadButtons();
});


var getIcon = function(category) {
  if (category === "video") {
    return "video play";
  } else if (category === "journal") {
    return "edit";
  } else if (category == "tips_quotes") {
    return "newspaper";
  }

}


var playContent = function(content){
 
      if (content.type === "welcome") {
        insert = '<h2 class="ui header"> <div class="content">'+ content.title + '</div> </h2>' +
                 '<div> Scroll mindlessly to your heart\'s content. </div>' ;
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
          insert += //"<div class='activityIcon'><i class='large edit icon'></i></div><h2>"+ content.title+"</h2>" +
                   //'<h2 class="ui header"> <i class="edit icon"></i> <div class="content">'+ content.title + '</div> </h2>' +
                  // '<textarea autofocus> </textarea>'+
                   //'<textarea id="response"> </textarea>' +

                   '<div class="ui form" id="response2"> <div class="field" > <textarea id="response" rows="2"></textarea> </div> </div>' +
                   '<br><button class="ui button" id="btnSaveEntry"> <i class="save icon"></i> Save </button>' +
                   '<button class="ui button" id="btnPastEntries"> <i class="edit icon"></i> My Journal </button>' +
                   '<br> <span id="saveMessage" style="color:green; display:none"> successfully saved! </span>' ;

      } else if(content.type === "tips_quotes"){
            //display tips and quotes
            //insert = "<h2>"+ content.title+"</h2>";
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
        playContent(content);
        if(currentlyPlaying) backStack.push(currentlyPlaying);
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
          forwardStack.push(content);
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




