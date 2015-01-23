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

function onHoverEmail()
{
    $("#email").attr('src', 'images/aboutR.png');
}

function offHoverEmail()
{
    $("#menuImg").attr('src', 'images/about.png');
}

/** OnClick Functions to be used for contact information END **/

/** JQuery onHover event listener**/

$(document).ready(function() {  
	$("#linkedin").hover(
		function(){
			$( this ).fadeOut( 100 );
  			$( this ).fadeIn( 500 );
		});
}); 