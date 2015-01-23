/** OnClick Functions to be used for contact information START **/
function onGitHubClick(){
	window.location.replace("https://github.com/ekamp");
}

function onEmailClick(){
	window.location.href = "mailto:user@ekamp14@gmail.com?subject=ContactFromWebSite";
}

/** Email Functions **/

function onLinkedInClick(){
	window.location.replace("https://www.linkedin.com/profile/view?id=219267740&trk=nav_responsive_tab_profile");
}

/** OnClick Functions to be used for contact information END **/

/** JQuery onHover event listener**/

function glowEmail(){
  $("#email").fadeOut(100, function{
  	$(this).load(function() { $(this).fadeIn(100); }); 
  	$(this).attr("src", "/images/email_selected.png");
  });
}

$(document).ready(function() {  
	$("#linkedin").hover(
		function(){
			$( this ).fadeOut( 50 );
  			$( this ).fadeIn( 500 );
		});
	$("#emailImages").hover(
		function(){
			glowEmail();
		});
	});