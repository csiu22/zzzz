var loadButtons = function(){


          $('#btnMyFavorites').click(function(e) {
            var favVar = loadFavorites();
            console.log(favVar);
            document.getElementById('favoritesContent').innerHTML = '';
            var content = document.createElement('div');
            content.innerHTML = favVar;
            document.getElementById('favoritesContent').appendChild(content);
            $('#favoritesModal').modal('show');
          });

          $('#btnMySettings').click(function(e) {
                  settings_functions();
          });

          $('#btnMyJournal').click(function(e) {
              loadJournalPage();
          });

          var loadJournalPage = function(){
              var journalVar = loadJournalView();
              document.getElementById('journalView').innerHTML = '';
              var content = document.createElement('div');
              content.innerHTML = journalVar;
              document.getElementById('journalView').appendChild(content);

              var promptsVar = loadJournalPrompts();
              document.getElementById('journalEdit').innerHTML = '';
              var content = document.createElement('div');
              content.innerHTML = promptsVar;
              document.getElementById('journalEdit').appendChild(content);

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
            $('#btnFavorite').addClass('empty');
          };

          // play specific content from favorites
          playOneFav = function(i) {
            var id = i;
            // var id = $(this).attr('id').substr(4);
            //var row = document.getElementById('entry' + id);
            var content = favorites[id];
            backStack.push(currentlyPlaying);  // not sure what to do about back/forward when playing from favorites
            forwardStack = [];
            playContent(content);
            $('#btnFavorite').removeClass('empty');
            $('#favoritesModal').modal('hide');
          };


          var loadFavorites = function() {
            var favVar = "";

            // favVar += "<h1> My Favorites </h1>";

            favVar += "<table class=\"ui striped table\">";
            favVar += "  <thead>";
            favVar += "    <tr>";
            favVar += "      <th>Title</th>";
            favVar += "      <th>Category</th>";
            // favVar += "      <th>Play</th>";
            // favVar += "      <th>Delete</th>";
            favVar += "    </tr>";
            favVar += "  </thead>";
            favVar += "  <tbody>";

            for (i = 0; i < favorites.length; i++) {
              var entry = favorites[i];

              favVar += "    <tr class='favEntry' id=\"entry" + i +"\">";
              favVar += "      <td onclick='playOneFav(" + i + ")'>" + entry.title + "</td>";
              favVar += "      <td onclick='playOneFav(" + i + ")'>"+ entry.category + "</td>";
              // favVar += "<td><button type='button' class='play' id=\"play" + i +"\" </button></td>";
              // favVar += "<td><button type='button' class='delete' id=\"btn" + i +"\" </button></td>";
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
            //changes shuffle to forward
            document.getElementById('btnShuffle').value = "Forward";
            document.getElementById('btnShuffle').className = "verticalcenter circular arrow right icon huge link"
            document.getElementById("btnShuffle").setAttribute("data-content", "Next");
            playContent(favorites[0]);
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
            console.log('hi');
            document.getElementById("saveMessage").style.display = "none";
          });

          $(document).on( "click" , "#btnPastEntries" , function(e){
              console.log('hi');
              loadJournalPage();
              $('#journalModal').modal('show');
          } );


          $('#btnLogin').click(function(e) {
              $('#loginModal').modal('show');
          });


          $('#btnLogout').click(function(e) {
            console.log("logout");
            document.getElementById("btnLogin").style.display = "block";
            document.getElementById("welcome").style.display = "none";
          });

          var submit_login = function() {
            user = document.getElementById("username").value;
            document.getElementById("loggedInUser").innerHTML = user;
            document.getElementById("btnLogin").style.display = "none";
            document.getElementById("welcome").style.display = "block";
            $(".dropdown").dropdown();
            $('#loginModal').modal('hide');
          }

          $(document).on( "click" , "#login" , function(e){
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
            } else {
              $('#btnFavorite').addClass('empty');
            }
          });


          $('#btnBack').click(function(e) {
            if (backStack.length === 0) document.getElementById('btnBack').disabled = true;
            else document.getElementById('btnBack').disabled = false;
            playBack();
            //changes shuffle to forward
            document.getElementById('btnShuffle').value = "Forward";
            document.getElementById('btnShuffle').className = "verticalcenter circular arrow right icon huge link"
            document.getElementById("btnShuffle").setAttribute("data-content", "Next");

            if (currentlyPlaying.title in fav_dict) {
              $('#btnFavorite').removeClass('empty');
            } else {
              $('#btnFavorite').addClass('empty');
            }
          });


          $('#btnFavorite').click(function(e) {
              if(currentlyPlaying){
                if (!(currentlyPlaying.title in fav_dict)) {
                  fav_dict[currentlyPlaying.title] = 0;
                  favorites.push(currentlyPlaying);
                } else {
                  console.log("trying to unfav")
                  var index = favorites.indexOf(currentlyPlaying);
                  favorites.splice(index, 1);
                  delete favorites[currentlyPlaying.title];
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
