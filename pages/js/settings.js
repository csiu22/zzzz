var load_settings = function(){


var settingsVar="";
settingsVar += "<div>";
settingsVar += "";
settingsVar += "<div id=\"settingsbox\" class=\"ui accordion styled fluid\">";
settingsVar += "	 <div class=\"title\">";
settingsVar += "	 		<i class=\"dropdown icon\"><\/i>";
settingsVar += "		  <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"ASMR\">";
settingsVar += "		     	<label>ASMR<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "";
settingsVar += "	  <div class=\"title\">";
settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
settingsVar += "		   <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"binaural_Beats\">";
settingsVar += "		     	<label>Binaural Beats<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "";
settingsVar += "";
settingsVar += "	  <div class=\"title\">";
settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
settingsVar += "		   <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"journal_Entries\">";
settingsVar += "		     	<label>Journal Entries<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "";
settingsVar += "	  <div class=\"title\">";
settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
settingsVar += "		   <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"music\">";
settingsVar += "		     	<label>Music<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "";
settingsVar += "	 <div class=\"title\">";
settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
settingsVar += "		   <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"relaxation\">";
settingsVar += "		     	<label>Relaxation Exercises<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "";
settingsVar += "	  <div class=\"title\">";
settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
settingsVar += "		   <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"tips_quotes\">";
settingsVar += "		     	<label>Tips and Quotes<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "";
settingsVar += "	  <div class=\"title\">";
settingsVar += "	  	<i class=\"dropdown icon\"><\/i>";
settingsVar += "		   <div class=\"ui toggle checkbox\">";
settingsVar += "		  	  <input type=\"checkbox\" id=\"videos\">";
settingsVar += "		     	<label>Videos<\/label>";
settingsVar += "		  <\/div>";
settingsVar += "	  <\/div>";
settingsVar += "	  <div class=\"content\">";
settingsVar += "	    <p>Description<\/p>";
settingsVar += "	  <\/div>";
settingsVar += "<\/div>";
settingsVar += "";
settingsVar += "<button class=\"ui red button right floated\" id=\"home\">Home<\/button>";
settingsVar += "";
settingsVar += "<\/div>";


return settingsVar;

};


var settings_functions = function(){
	$('.ui.accordion').accordion();

	$(".ui.toggle.checkbox").checkbox({
    onChecked: function() {
    	var setting = $(this)[0].id;
    	var index = categories.indexOf(setting);
    	if(index != -1) {
    		if (index > -1) {
    			categories.splice(index, 1);
			}}
		disabled_categories.push(setting);
    }, 
	onUnchecked: function() {
         var setting = $(this)[0].id;
    	var index = disabled_categories.indexOf(setting);
    	if(index != -1) {
    		if (index > -1) {
    			disabled_categories.splice(index, 1);
			}}
		categories.push(setting);
    }});


}