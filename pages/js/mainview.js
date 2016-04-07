var loadButtons = function(){

          $('#btnMyFavorites').click(function(e) {
          document.getElementById("content").innerHTML='<object type="text/html" data="pages/favorites.html" ></object>';
           load_favorites();
          });

          $('#btnMySettings').click(function(e) {
                  var settingsVar = load_settings();
                  document.getElementById('content').innerHTML = '';
                  var content = document.createElement('div');
                  content.innerHTML = settingsVar;
                  document.getElementById('content').appendChild(content);
                  //window.location.href = 'settings.html';  
                  document.getElementById('btnFavorite').disabled = true;
                  settings_functions();
          });

          $('#btnMyJournal').click(function(e) {
              //load_journal();
              document.getElementById("content").innerHTML='<object type="text/html" data="pages/journal.html" ></object>';

              // We will need to switch to angular or something to get below to work >.>
              //$('.sortable.table').tablesort();

          });

          /* btnSaveEntry is statically created so needs to be like this. */
          $(document).on( "click" , "#btnSaveEntry" , function(e){
            var entry = document.getElementById("response").value;
            console.log(entry);
            my_journal[my_journal.length-1]["text"] = entry;
            console.log("updated journal length " + my_journal.length)
            document.getElementById("saveMessage").style.display = "block";
          });

          $(document).on( "click" , "#btnPastEntries" , function(e){
            document.getElementById("content").innerHTML='<object type="text/html" data="pages/journal.html" ></object>';
          } );


          $('#btnLogin').click(function(e) {
                    window.alert('Successful login!');
                    document.getElementById('btnLogin').disabled = true;
          });

          $('#btnShuffle').click(function(e) {
            document.getElementById('content').innerHTML = '';
            document.getElementById('btnBack').disabled = false;
            document.getElementById('btnFavorite').disabled = false;

            if (forwardStack.length > 0) {
              playNext();
                if (forwardStack.length == 0) {
                document.getElementById('btnShuffle').value = "Shuffle";
                document.getElementById('btnShuffle').className = "circular random icon huge link"
              }
              else{
                document.getElementById('btnShuffle').value = "Next";
                document.getElementById('btnShuffle').className = "circular arrow right icon huge link"
              }
            }

            else {
              shuffle();
            }
          });


          $('#btnBack').click(function(e) {
            if (backStack.length === 0) document.getElementById('btnBack').disabled = true;
            else document.getElementById('btnBack').disabled = false;
            playBack();
            //changes shuffle to forward
            document.getElementById('btnShuffle').value = "Forward";
            document.getElementById('btnShuffle').className = "circular arrow right icon huge link"
          });


          $('#btnFavorite').click(function(e) {
              /*
                  This needs to be fixed to prevent favoriting the same thing multiple times
              */

              if(currentlyPlaying){
                favorites.push(currentlyPlaying);
              }

          });

$('.icon').popup({
          delay: {
                show: 300,
                hide: 0
               }
        });

};
