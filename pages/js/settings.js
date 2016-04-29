// var load_settings = function(){


// var settingsVar="";
// settingsVar += "<div class=\"ui modal \">";
// settingsVar += "<div class=\"header \"> Settings </div>";
// settingsVar += "";
// settingsVar += "<div id=\"settingsbox\" class=\"content ui stacked segments accordion styled fluid\">";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	 <div class=\"title\">";
// settingsVar += "	 		<i class=\"dropdown icon \"><\/i>";
// settingsVar += "		  <div class=\"ui toggle checkbox \" id=\"ASMR\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"ASMR\">";
// settingsVar += "		     	<label>ASMR<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	  <div class=\"title\">";
// settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
// settingsVar += "		   <div class=\"ui toggle checkbox\" id=\"binauralBeats\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"binauralBeats\">";
// settingsVar += "		     	<label>Binaural Beats<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "";
// settingsVar += "";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	  <div class=\"title\">";
// settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
// settingsVar += "		   <div class=\"ui toggle checkbox\" id=\"journalEntries\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"journalEntries\">";
// settingsVar += "		     	<label>Journal Entries<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	  <div class=\"title\">";
// settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
// settingsVar += "		   <div class=\"ui toggle checkbox\" id=\"music\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"music\">";
// settingsVar += "		     	<label>Music<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	 <div class=\"title\">";
// settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
// settingsVar += "		   <div class=\"ui toggle checkbox\" id=\"relaxation\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"relaxation\">";
// settingsVar += "		     	<label>Relaxation Exercises<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	  <div class=\"title\">";
// settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
// settingsVar += "		   <div class=\"ui toggle checkbox\" id=\"tips_quotes\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"tips_quotes\">";
// settingsVar += "		     	<label>Tips and Quotes<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "";
// settingsVar += "     <div class=\"ui left aligned segment\">";
// settingsVar += "	  <div class=\"title\">";
// settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
// settingsVar += "		   <div class=\"ui toggle checkbox\" id=\"videos\">";
// settingsVar += "		  	  <input type=\"checkbox\" name=\"videos\">";
// settingsVar += "		     	<label>Videos<\/label>";
// settingsVar += "		  <\/div>";
// settingsVar += "	  <\/div>";
// settingsVar += "	  <div class=\"content\">";
// settingsVar += "	    <p>Description<\/p>";
// settingsVar += "	  <\/div>";
// settingsVar += "<\/div>";
// settingsVar += "<\/div>";
// settingsVar += "    <div class=\"actions\">";
// settingsVar += "        <div class=\"ui green basic inverted approve button\">";
// settingsVar += "        <i class=\"checkmark icon\"><\/i>";
// settingsVar += "               Done";
// settingsVar += "        <\/div>";
// settingsVar += "     <\/div>";
// settingsVar += "";

// settingsVar += "";
// settingsVar += "<\/div>";


// return settingsVar;

// };


var settings_functions = function(){
	$('.ui.accordion').accordion();

    for(i=0; i<categories.length; i++){
        $("#" + categories[i]).checkbox('set checked');
    }

    for(i=0; i<disabled_categories.length; i++){
        $("#" + disabled_categories[i]+"").checkbox('set unchecked');
    }


	$(".ui.toggle.checkbox").click(function(e){
    e.stopPropagation();
  });

	$(".ui.toggle.checkbox").checkbox({
    onUnchecked: function() {
    	var setting = $(this)[0].name;
    	var index = categories.indexOf(setting);
    	if(index != -1) {
    		if (index > -1) {
    			categories.splice(index, 1);
			}}
		disabled_categories.push(setting);
    },
	onChecked: function() {
     var setting = $(this)[0].name;
    	var index = disabled_categories.indexOf(setting);
    	if(index != -1) {
    		if (index > -1) {
    			disabled_categories.splice(index, 1);
			}}
		categories.push(setting);
    }});


    $('#settingsModal').modal('show');
}
