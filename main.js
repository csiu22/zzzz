 $(document).ready(function() {

    //global variables for the entire app

    categories = ["binarualBeats", "journalEntries", "tips_quotes", "ASMR", 'videos', "music", "relaxation"]
    disabled_categories = [];
    favorites = [];
    backStack = [];
    forwardStack = [];
    playList = [];
    currentlyPlaying = "welcome content"; // let's create welcome content for the first screen

    totalContent = {};

    loadContent();
    loadButtons();
});


var playContent = function(content){
      if(currentlyPlaying) backStack.push(currentlyPlaying);

      if(content.type === "video"){
          /*
            display embedded video player
          */
      }else if(content.type === "journal"){
          /*
            display editable journal entry
          */
      }
      else if(content.type === "tips_quotes"){
            //display tips and quotes
      }
      else{
            //throw error
      }

      /*
        until this is developed further
      */
      document.getElementById("content").innerHTML='<h3>' + content.title + "</h3>"; 

      currentlyPlaying = content; 
      if(backStack.length === 0) document.getElementById('btnBack').disabled = true;
}

var shuffle = function(){
        
        //randomly choose from playlist
        category_index = Math.floor(Math.random() * categories.length);
        category = categories[category_index];
        content = getContent(category);
        console.log(category);
        playContent(content);
}

var playNext = function(){
        content = forwardStack.pop();
        backStack.push(content);
        playContent(content);
}

var playBack = function(){
      content = backStack.pop();
      if(content){
          forwardStack.push(popped);
          playContent(content);
      }
}

var getContent = function(category){
    item_list = totalContent[category];
    item_index = Math.floor(Math.random() * item_list.length);
    item = item_list[item_index];
    return item
}




