// template variables
var about_template, campaigns_template, special_projects_template;

// data
var about_data = aboutData;
var campaign_data = campaignData;
var special_projects_data = specialProjectsData;


// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}


// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source = $("#about-template").html();
	about_template = Handlebars.compile(source);
	
	source = $("#campaigns-template").html();
	campaigns_template = Handlebars.compile(source);

	source = $("#special-projects-template").html();
	special_projects_template = Handlebars.compile(source);


	$("#about-tab").click(function () {
		// show about page
		showTemplate(about_template, about_data);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-bar .active").removeClass("active");
		// then make slideshow tab active
		$("#about-tab").addClass("active");

		$( ".highlights" ).click(function() {
			$("#campaigns-tab").click();
		});
	});

	$("#campaigns-tab").click(function () {
		// show campaigns page
		showTemplate(campaigns_template, campaign_data);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-bar .active").removeClass("active");
		// then make slideshow tab active
		$("#campaigns-tab").addClass("active");
	});


	$("#special-projects-tab").click(function () {
		// show special projects page
		showTemplate(special_projects_template, special_projects_data);
		
		// make the slideshow tab the active one
		// first make the currently active tab inactive
		$(".nav-bar .active").removeClass("active");
		// then make slideshow tab active
		$("#special-projects-tab").addClass("active");
	});


	// start the page by showing about
	$("#about-tab").click();



	// ghetto router
	( function () {

			var urlParams = window.location.hash;

			if ( urlParams === '#about') {
				$("#about-tab").click();
			}

			if ( urlParams === '#campaigns') {
				$("#campaigns-tab").click();
			}

			if ( urlParams === '#special-projects') {
				$("#special-projects-tab").click();
			}

		})();

});