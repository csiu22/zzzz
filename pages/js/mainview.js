var loadButtons = function(){

          $('#btnMyFavorites').click(function(e) {
            var favVar = load_favorites();
            document.getElementById('content').innerHTML = '';
            var content = document.createElement('div');
            content.innerHTML = favVar;
            document.getElementById('content').appendChild(content);
          });

          $('#btnMySettings').click(function(e) {
                  settings_functions();
                  $('#settingsModal').modal('show');
                  
          });

          $('#btnMyJournal').click(function(e) {
              loadJournalPage();
          });

          var loadJournalPage = function(){
                  var journalVar = loadJournal();
                  document.getElementById('content').innerHTML = '';
                  var content = document.createElement('div');
                  content.innerHTML = journalVar;
                  document.getElementById('content').appendChild(content);
                  document.getElementById('btnFavorite').disabled = true;
                  journal_functions();
          };

          /* btnSaveEntry is statically created so needs to be like this. */
          $(document).on( "click" , "#btnSaveEntry" , function(e){
            var entry = document.getElementById("response").value;
            var temp_entry = {};
            temp_entry["text"] = entry;
            temp_entry["date"] = new Date();
            my_journal.unshift(temp_entry);
            console.log(my_journal);
            document.getElementById("saveMessage").style.display = "block";
          });

          $(document).on("click", "#response", function(){
            document.getElementById("saveMessage").style.display = "none";
          });

          $(document).on( "click" , "#btnPastEntries" , function(e){
              loadJournalPage();
          } );


          $('#btnLogin').click(function(e) {
                     $('#loginModal').modal('show');
          });

          $('#btnShuffle').click(function(e) {
            document.getElementById('content').innerHTML = '';
            document.getElementById('btnBack').disabled = false;
            document.getElementById('btnFavorite').disabled = false;

            if (forwardStack.length > 0) {
              playNext();
                if (forwardStack.length == 0) {
                document.getElementById('btnShuffle').value = "Shuffle";
                document.getElementById('btnShuffle').className = "verticalcenter circular random icon huge link"
              }
              else{
                document.getElementById('btnShuffle').value = "Next";
                document.getElementById('btnShuffle').className = "verticalcenter circular arrow right icon huge link"
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
            document.getElementById('btnShuffle').className = "verticalcenter circular arrow right icon huge link"
          });


          $('#btnFavorite').click(function(e) {
              if(currentlyPlaying){
                if (!(currentlyPlaying.title in fav_dict)) {
                  fav_dict[currentlyPlaying.title] = 0;
                  favorites.push(currentlyPlaying);
                }
              }


            $(this).toggleClass('empty');

            // $(this).find('i').toggleClass('heart icon huge red link');
            // $('#btnMyFavorites').remove();
            // $("favRow").append("<i id=\"btnFavorite\" class=\"heart icon huge red link\"></i>");

          });

$('.icon').popup({
          delay: {
                show: 300,
                hide: 0
               }
        });

};
