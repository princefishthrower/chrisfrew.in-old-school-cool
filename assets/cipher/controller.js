/**
 * Trigger a callback when the selected images are loaded:
 * @param {String} selector
 * @param {Function} callback
  */
var onImgLoad = function(selector, callback){
    $(selector).each(function(){
        if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
            callback.apply(this);
        }
        else {
            $(this).on('load', function(){
                callback.apply(this);
            });
        }
    });
};

onImgLoad(".cipher", function(){
  console.log("firing...");
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
  }, 5000);
});

