var loadButtons = function(){


          $('#btnMyFavorites').click(function(e) {
           document.getElementById("content").innerHTML='<object type="text/html" data="pages/favorites.html" ></object>'; 
          });

          $('#btnMySettings').click(function(e) {
            console.log("my settings");
            document.getElementById("content").innerHTML='<object type="text/html" data="pages/settings.html" ></object>';  
          });

          $('#btnMyJournal').click(function(e) {
              document.getElementById("content").innerHTML='<object type="text/html" data="pages/journal/settings.html" ></object>'; 
          }); 


          $('#btnLogin').click(function(e) {


          });

          $('#btnShuffle').click(function(e) {
            document.getElementById('content').innerHTML = '';
            // document.getElementById('btnBack').disabled = false;
            // document.getElementById('btnFavorite').disabled = false;

            if (forwardStack.length > 0) {
              playNext();
                if (forwardStack.length == 0) {
                document.getElementById('btnShuffle').value = "Shuffle";
                document.getElementById('shuffleIcon').className = "random icon"
              }
              else{
                document.getElementById('btnShuffle').value = "Next";
                document.getElementById('shuffleIcon').className = "arrow right icon"
              }
            }

            else {
              shuffle();
            }
          });


          $('#btnBack').click(function(e) { 
            // document.getElementById('btnFavorite').disabled = false;
            document.getElementById('content').innerHTML = '';

            //changes shuffle to forward
            document.getElementById('btnShuffle').value = "Forward";
            document.getElementById('shuffleIcon').className = "arrow right icon"
          });


          $('#btnFavorite').click(function(e) {


          });

$('.icon').popup({
          delay: {
                show: 300,
                hide: 0
               }
        });

};
