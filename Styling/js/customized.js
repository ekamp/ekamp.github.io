/** Document ready function for creation of js effects on page **/

$(function(){
  initGithubHoverEffect();
  initEmailHoverEffect();
  initLinkedInHoverEffect();

  bindGithubOnClick();
  bindEmailOnClick();
  bindLinkedInOnClick();
});

/** Hover effect creation functions **/

function initGithubHoverEffect(){
	$("#github").hover(function(){
    $(this).attr("src","/images/github_selected.png");
  }, function(){
    $(this).attr("src","/images/github.png");
  });
}

function initEmailHoverEffect(){
  $("#email").hover(function(){
    $(this).attr("src", "/images/email_selected.png");
  }, function(){
    $(this).attr("src", "/images/email.png");
  });
}

function initLinkedInHoverEffect(){
  $("#linkedin").hover(function(){
    $(this).attr("src", "/images/linkedin_selected.png");
  }, function(){
    $(this).attr("src", "/images/linkedin.png");
  });
}

/** onClick creation functions **/

function bindGithubOnClick(){
  $("#github").click(onGitHubClick);
}

function bindEmailOnClick(){
  $("#email").click(onEmailClick);
}

function bindLinkedInOnClick(){
  $("#linkedin").click(onLinkedInClick);
}

/** onClick functions **/

function onGitHubClick(){
  window.location.replace("https://github.com/ekamp");
}

function onEmailClick(){
	window.location.href = "mailto:user@ekamp14@gmail.com?subject=ContactFromWebSite";
}

function onLinkedInClick(){
	window.location.replace("https://www.linkedin.com/profile/view?id=219267740&trk=nav_responsive_tab_profile");
}
