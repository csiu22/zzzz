var loadButtons = function(){


          $('#btnMyFavorites').click(function(e) {
            if(user == undefined){
              $('#loginModal').modal('show');
              return;
            }

            var favVar = loadFavorites();
            console.log(favVar);
            document.getElementById('favoritesContent').innerHTML = '';
            var content = document.createElement('div');
            content.innerHTML = favVar;
            document.getElementById('favoritesContent').appendChild(content);
            $('#favoritesModal').modal('show');
            if (favorites.length == 0) {
              $('#btnPlaylist').addClass('disabled');
            } else {
              $('#btnPlaylist').removeClass('disabled');
            }
          });

          $('#btnMySettings').click(function(e) {
              if(user == undefined){
              $('#loginModal').modal('show');
              return;
            }
                  settings_functions();
          });

          $('#btnMyJournal').click(function(e) {
              if(user == undefined){
              $('#loginModal').modal('show');
              return;
            }
              loadJournalPage();
          });

          var loadJournalPage = function(){
              var journalVar = loadJournalView();
              document.getElementById('journalView').innerHTML = journalVar;

              var promptsVar = loadJournalPrompts();
              document.getElementById('journalEdit').innerHTML = promptsVar;

              $('.menu .item').tab();
              $('#journalModal').modal('show');
          };

          // delete from favorites; then reload page
          deleteFromFav = function(i) {
            var id = i;
            var row = document.getElementById('entry' + id);
            var title = favorites[id].title;
            favorites.splice(id, 1);
            delete fav_dict[title];

            var favVar = loadFavorites();
            document.getElementById('favoritesContent').innerHTML = '';
            var content = document.createElement('div');
            content.innerHTML = favVar;
            document.getElementById('favoritesContent').appendChild(content);

            if (title == currentlyPlaying.title) {
              $('#btnFavorite').addClass('empty');
              $('#btnFavorite').attr("data-content", "Favorite");
            }
            if (favorites.length == 0) {
              $('#btnPlaylist').addClass('disabled');
            }
          };

          // play specific content from favorites
          playOneFav = function(i) {
            var id = i;
            // var id = $(this).attr('id').substr(4);
            //var row = document.getElementById('entry' + id);
            var content = favorites[id];
            backStack.push(currentlyPlaying);
            forwardStack = [];
            playContent(content);
            currentlyPlaying = content;
            $('#btnFavorite').removeClass('empty');
            $('#btnFavorite').attr("data-content", "Unfavorite");
            $('#favoritesModal').modal('hide');
          };


          var loadFavorites = function() {
            var favVar = "";

            favVar += "<table class=\"ui striped table\">";
            favVar += "  <thead>";
            favVar += "    <tr>";
            favVar += "      <th>Title</th>";
            favVar += "      <th>Category</th>";
            favVar += "      <th></th>";
            favVar += "    </tr>";
            favVar += "  </thead>";
            favVar += "  <tbody>";

            for (i = 0; i < favorites.length; i++) {
              var entry = favorites[i];

              favVar += "    <tr class='favEntry' id=\"entry" + i +"\">";
              favVar += "      <td onclick='playOneFav(" + i + ")'>" + entry.title + "</td>";
              favVar += "      <td onclick='playOneFav(" + i + ")'>"+ entry.category + "</td>";
              favVar += "<td><i class='large trash outline icon' onclick='deleteFromFav(" + i + ")'></i><\/td>";

              $('#btnMyJournal').click(function(e) {
                loadJournalPage();
              });

            }

            favVar += "  </tbody>";
            favVar += "</table>";

            return favVar;
          };

          // play all favorites as a playlist
          $(document).on('click', '#btnPlaylist', function() {
            forwardStack = [];
            for (i = 1; i < favorites.length; i++) {
              var content = favorites[i];
              forwardStack.push(content);
            }

            console.log(forwardStack.length);
            //changes shuffle to forward
            if (forwardStack.length >= 1) {
              document.getElementById('btnShuffle').value = "Forward";
              document.getElementById('btnShuffle').className = "verticalcenter circular arrow right icon huge link"
              document.getElementById("btnShuffle").setAttribute("data-content", "Next");
            }

            playContent(favorites[0]);
            currentlyPlaying = favorites[0];
            $('#btnFavorite').removeClass('empty');
            $('#favoritesModal').modal('hide');
          });




          /* btnSaveEntry is statically created so needs to be like this. */
          $(document).on( "click" , "#btnSaveEntry" , function(e){
            var entry = document.getElementById("response").value;
            var temp_entry = {};

             temp_entry["category"] = currentlyPlaying.category;
            temp_entry["title"] = currentlyPlaying.title;
             temp_entry["type"] = currentlyPlaying.type;
            temp_entry["text"] = entry;
            temp_entry["date"] = new Date();

            my_journal.unshift(temp_entry);
            document.getElementById("saveMessage").style.display = "block";
            document.getElementById("response").value = '';
          });

          $(document).on("click", "#response", function(){

            document.getElementById("saveMessage").style.display = "none";
          });

          $(document).on( "click" , "#btnPastEntries" , function(e){

              loadJournalPage();
              $('#journalModal').modal('show');
          } );


          $('#btnLogin').click(function(e) {
              $('#loginModal').modal('show');
              $("#loginfield").show();
              $("#loginfield").children().show();

          });


          $('#btnLogout').click(function(e) {

             flush_variables();
             $(".icon").hide();
             $("#btnLogin").show();
             $('#btnFavorite').addClass('empty');
             $('#btnFavorite').attr("data-content", "Favorite");
             login_message();
          });

          var submit_login = function() {
            user = document.getElementById("username").value;
            currentlyPlaying = welcome_content; // let's create welcome content for the first screen
            playContent(currentlyPlaying);
            $('#loginModal').modal('hide');
            $(".icon").show()
            $("#btnLogin").hide()
            $("#btnFavorite").hide();
          }

          $(document).on( "click" , "#login" , function(e){
            document.getElementById('btnShuffle').value = "Shuffle";
            document.getElementById('btnShuffle').className = "verticalcenter circular random icon huge link"
            document.getElementById("btnShuffle").setAttribute("data-content", "Shuffle");
            submit_login();
          } );


          $(document).on("keydown", "input#username", function(e) {
            if (e.keyCode == 13) {
              e.preventDefault();
              $('#loginModal').modal('hide');
              submit_login();
            }
          });

          //$('#btnShuffle').click(function(e) {
          $(document).on("click", "#btnShuffle", function(e) {
            if(user == undefined){
              $('#loginModal').modal('show');
              return
            }
            $("#btnFavorite").show();
            document.getElementById('content').innerHTML = '';
            document.getElementById('btnBack').disabled = false;
            document.getElementById('btnFavorite').disabled = false;

            if (forwardStack.length > 0) {
              playNext();
                if (forwardStack.length == 0) {
                document.getElementById('btnShuffle').value = "Shuffle";
                document.getElementById('btnShuffle').className = "verticalcenter circular random icon huge link"
                document.getElementById("btnShuffle").setAttribute("data-content", "Shuffle");
              }
              else{
                var btnShuffle = document.getElementById('btnShuffle');
                btnShuffle.value = "Next";
                btnShuffle.className = "verticalcenter circular arrow right icon huge link";
                console.log("change to next");
                btnShuffle.setAttribute("data-content", "Next");
              }
            }

            else {
              shuffle();
            }

            if (currentlyPlaying.title in fav_dict) {
              $('#btnFavorite').removeClass('empty');
              $('#btnFavorite').attr("data-content", "Unfavorite");
            } else {
              $('#btnFavorite').addClass('empty');
              $('#btnFavorite').attr("data-content", "Favorite");
            }
          });


          $('#btnBack').click(function(e) {
            if(user == undefined){
              $('#loginModal').modal('show');
              return
            }

            if (backStack.length === 0) document.getElementById('btnBack').disabled = true;
            else document.getElementById('btnBack').disabled = false;
            playBack();
            //changes shuffle to forward
            document.getElementById('btnShuffle').value = "Forward";
            document.getElementById('btnShuffle').className = "verticalcenter circular arrow right icon huge link"
            document.getElementById("btnShuffle").setAttribute("data-content", "Next");

            if (currentlyPlaying.title in fav_dict) {
              $('#btnFavorite').removeClass('empty');
              $('#btnFavorite').attr("data-content", "Unfavorite");
            } else {
              $('#btnFavorite').addClass('empty');
              $('#btnFavorite').attr("data-content", "Favorite");
            }
          });


          $('#btnFavorite').click(function(e) {

            if (user == undefined) {
              $('#loginModal').modal('show');
              return
            }

              if(currentlyPlaying){
                console.log(currentlyPlaying);
                if (currentlyPlaying.title != 'Welcome') {
                  if (!(currentlyPlaying.title in fav_dict)) {
                    fav_dict[currentlyPlaying.title] = 0;
                    favorites.push(currentlyPlaying);
                    $(this).attr("data-content", "Unfavorite");
                  } else {
                    console.log("trying to unfav")
                    var index = favorites.indexOf(currentlyPlaying);
                    favorites.splice(index, 1);
                    delete fav_dict[currentlyPlaying.title];
                    $(this).attr("data-content", "Favorite");
                  }

                  $(this).toggleClass('empty');
                  console.log(fav_dict);
                }
              }


          });

$('.icon').popup({
          delay: {
                show: 300,
                hide: 0
               }
        });

};
