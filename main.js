 $(document).ready(function() {

    //global variables for the entire app

    categories = ["binauralBeats", "journalEntries", "tips_quotes", "ASMR", 'videos', "music", "relaxation"]
    disabled_categories = [];
    favorites = [];
    backStack = [];
    forwardStack = [];
    playList = [];
    totalContent = {};


    loadContent();
    currentlyPlaying = null; // let's create welcome content for the first screen
    playContent(welcome_content);
  
    loadButtons();
});


var playContent = function(content){
      console.log(backStack);
      console.log(forwardStack);
  

      if(content.type === "video"){
          
        /*
            display embedded video player
        */

      insert = "<h2>"+ content.title+"</h2> </br> "+
                "<iframe width='444' height='250' src='"+content.url+"' frameborder='0' allowfullscreen> </iframe>";

      }else if(content.type === "journal"){
        
          /*
            display editable journal entry
          */  
          insert = "<h2>"+ content.title+"</h2>";

      }
      else if(content.type === "tips_quotes"){
            //display tips and quotes
            insert = "<h2>"+ content.title+"</h2>";
      }
      else{
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




