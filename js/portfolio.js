// template variables
var about_template, campaigns_template;

// data
var about_data = aboutData;
var campaign_data = campaignData;


// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}


// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#about-template").html();
	about_template = Handlebars.compile(source);
	
	source   = $("#campaigns-template").html();
	campaigns_template = Handlebars.compile(source);


	$("#about").click(function () {
		// show about page
		showTemplate(about_template, about_data);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-bar .active").removeClass("active");
		// then make slideshow tab active
		$("#about").addClass("active");
	});

	$("#campaigns").click(function () {
		// show campaigns page
		showTemplate(campaigns_template, campaign_data);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-bar .active").removeClass("active");
		// then make slideshow tab active
		$("#campaigns").addClass("active");
	});


	// start the page by showing the albums view
	// we do this by virtually clicking on the 
	// albums tab
	$("#about").click();

});