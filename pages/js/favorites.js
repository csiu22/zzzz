var load_favorites = function() {
  var favVar = "";

  favVar += "<h1> My Favorites </h1>";

  favVar += "<table class=\"ui striped table\">";
  favVar += "  <thead>";
  favVar += "    <tr>";
  favVar += "      <th>Order</th>";
  favVar += "      <th>Title</th>";
  favVar += "      <th>Category</th>";
  favVar += "      <th>Date Added</th>";
  favVar += "    </tr>";
  favVar += "  </thead>";
  favVar += "  <tbody>";

  for (i = 0; i < favorites.length; i++) {
    var entry = favorites[i];

    favVar += "    <tr id=\"entry" + (i+1) +"\">";
    favVar += "      <td>"+ entry + "</td>";
    favVar += "      <td>"+ entry.title + "</td>";
    favVar += "      <td>"+ entry.category + "</td>";
    // favVar += "      <td class=\"date\">"+ (Number(entry.date.getMonth())+1)+"/"+entry.date.getDate()+"/"+entry.date.getFullYear()+"</td>";
    favVar += "      </tr>";
  }

  favVar += "  </tbody>";
  favVar += "</table>";

  return favVar;
};