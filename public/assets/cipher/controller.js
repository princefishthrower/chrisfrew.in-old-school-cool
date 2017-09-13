function onImageLoaded(){
  $(".cipher").addClass("cipherAnimation");
  $(".ring").addClass("ringAnimation");
  $(".fog1").addClass("fog1Animation fogAnimation");
  $(".fog2").addClass("fog2Animation fogAnimation");
  $(".fog3").addClass("fog3Animation fogAnimation");
  $(".fog4").addClass("fog4Animation fogAnimation");
  $(".fog6").addClass("fog6Animation fogAnimation");
  $(".fog5").addClass("fog5Animation fogAnimation");

  // set 5 second delay to match up with the dispatched animations
  setTimeout(function() {
    new Audio("wheelstart.mp3").play();
  }, 8000);

}

