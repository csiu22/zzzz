 $(document).ready(function() {

    var categories = ["binarualBeats", "journalEntries", "tips_quotes", "ASMR", 'videos', "music", "relaxation"]
    var disabled_categories = [];
    var favorites = [];
    var backStack = [];
    var forwardStack = [];
    var playList = [];
    var currentlyPlaying;

    var totalContent = {};


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
      //document.getElementById("content").innerHTML='<object type="text/html" data=".html" ></object>'; 

      currentlyPlaying = content; 
      if(backStack.length === 0) document.getElementById('btnBack').disabled = true;
}

var shuffle = function(){
        
        //randomly choose from playlist
        category_index = Math.floor(Math.random() * categories.length);
        category = categories[category_index];

        content = getContent(category);
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
    item_list = totalContent[category].length;
    item_index = Math.floor(Math.random() * item_list.length);
    item = item_list[item_index];
    return item
}


$('.icon')
  .popup({
          delay: {
                show: 300,
                hide: 0
               }
        });
  });
