var load_favorites = function() {
  var favVar = "";

  // favVar += "<h1> My Favorites </h1>";

  favVar += "<table class=\"ui striped table\">";
  favVar += "  <thead>";
  favVar += "    <tr>";
  favVar += "      <th>Title</th>";
  favVar += "      <th>Category</th>";
  favVar += "    </tr>";
  favVar += "  </thead>";
  favVar += "  <tbody>";

  for (i = 0; i < favorites.length; i++) {
    var entry = favorites[i];

    favVar += "    <tr id=\"entry" + (i+1) +"\">";
    favVar += "      <td>"+ entry.title + "</td>";
    favVar += "      <td>"+ entry.category + "</td>";
    favVar += "      </tr>";
  }

  favVar += "  </tbody>";
  favVar += "</table>";

  return favVar;
};