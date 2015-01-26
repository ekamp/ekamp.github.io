/** Github functions **/

function onGitHubClick(){
	window.location.replace("https://github.com/ekamp");
}

function fadeInBrightGitHub(){
  $("#github").fadeOut(0, function(){
  	$(this).load(function() { $(this).fadeIn(); }); 
  	$(this).attr("src", "/images/github_selected.png");
  });
}

function fadeInOriginalGitHub(){
	$("#github").fadeOut(0, function(){
  	$(this).load(function() { $(this).fadeIn(); }); 
  	$(this).attr("src", "/images/github.png");
  });
}

/** Email Functions **/

function onEmailClick(){
	window.location.href = "mailto:user@ekamp14@gmail.com?subject=ContactFromWebSite";
}

function fadeInBrightEmail(){
  $("#email").fadeOut(0, function(){
  	$(this).load(function() { $(this).fadeIn(); }); 
  	$(this).attr("src", "/images/email_selected.png");
  });
}

function fadeInOriginalEmail(){
	$("#email").fadeOut(0, function(){
  	$(this).load(function() { $(this).fadeIn(); }); 
  	$(this).attr("src", "/images/email.png");
  });
}

/** LinkedIn Functions **/

function onLinkedInClick(){
	window.location.replace("https://www.linkedin.com/profile/view?id=219267740&trk=nav_responsive_tab_profile");
}

function fadeInBrightLinkedIn(){
  $("#linkedin").fadeOut(0, function(){
  	$(this).load(function() { $(this).fadeIn(); }); 
  	$(this).attr("src", "/images/linkedin_selected.png");
  });
}

function fadeInOriginalLinkedIn(){
	$("#linkedin").fadeOut(200, function(){
  	$(this).load(function() { $(this).fadeIn(200); }); 
  	$(this).attr("src", "/images/linkedin.png");
  });
}