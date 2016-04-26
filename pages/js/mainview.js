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
              var journalVar = loadJournal();
              document.getElementById('journalContent').innerHTML = '';
              var content = document.createElement('div');
              content.innerHTML = journalVar;
              document.getElementById('journalContent').appendChild(content);
              //document.getElementById('btnFavorite').disabled = true;
              //journal_functions();
              $('#journalModal').modal('show');
          };


          var loadFavorites = function() {
            var favVar = "";
            console.log('HELLO');

            // favVar += "<h1> My Favorites </h1>";

            favVar += "<table class=\"ui striped table\">";
            favVar += "  <thead>";
            favVar += "    <tr>";
            favVar += "      <th>Title</th>";
            favVar += "      <th>Category</th>";
            favVar += "      <th> HISDHFIODH </th>"
            favVar += "    </tr>";
            favVar += "  </thead>";
            favVar += "  <tbody>";

            for (i = 0; i < favorites.length; i++) {
              var entry = favorites[i];

              favVar += "    <tr id=\"entry" + i +"\">";
              favVar += "      <td>" + entry.title + "</td>";
              favVar += "      <td>"+ entry.category + "</td>";
              favVar += "<td><button type='button' class='delete' value='delete' id=\"btn" + i +"\" </button></td>";

              $('#btnMyJournal').click(function(e) {
                loadJournalPage();
              });

            }

            favVar += "  </tbody>";
            favVar += "</table>";

            return favVar;
          };


          // delete from favorites; then reload page
          $(document).on('click', '.delete', function() {
            var id = $(this).attr('id').substr(3);
            console.log(id);
            var row = document.getElementById('entry' + id);
            var title = favorites[id].title;
            console.log(title);
            favorites.splice(id, 1);
            console.log(fav_dict);
            delete fav_dict[title];
            console.log(fav_dict);

            var favVar = loadFavorites();
            document.getElementById('favoritesContent').innerHTML = '';
            var content = document.createElement('div');
            content.innerHTML = favVar;
            document.getElementById('favoritesContent').appendChild(content);
            $('#favoritesModal').modal('show');
          });




          /* btnSaveEntry is statically created so needs to be like this. */
          $(document).on( "click" , "#btnSaveEntry" , function(e){
            var entry = document.getElementById("response").value;
            var temp_entry = {};
            temp_entry["text"] = entry;
            temp_entry["date"] = new Date();
            temp_entry["type"] = "journal";
            temp_entry["title"] = currentlyPlaying["title"];

            console.log(currentlyPlaying);
            /*
            var temp_entry = currentlyPlaying;
            temp_entry["text"] = entry;
            temp_entry["date"] = new Date();
            */

            my_journal.unshift(temp_entry);
            //console.log(entry);
            //console.log(my_journal);
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

          $(document).on( "click" , "#login" , function(e){
            user = document.getElementById("username").value;
            document.getElementById("loggedInUser").innerHTML = user;
            document.getElementById("btnLogin").style.display = "none";
            document.getElementById("welcome").style.display = "block";
            $(".dropdown").dropdown();
            $('#loginModal').modal('hide');
          } );

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
