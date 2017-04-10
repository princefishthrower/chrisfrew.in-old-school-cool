var _originalLeft;
var _clicked;
var iAnimationDuration = 2000;

function onBioClick() {
  if (_clicked) {
    _clicked = false;
    onDoneClick();
    return;
  }
  _clicked = true;
  _originalLeft = $(".page_nav").css("left");
  $("#bioText").html("&lt;&lt; BIO");

  var bioHeight = $(".bio").css("height");
  $(".page_nav").animate({left: $(window).width() / 2 - $(".page_nav").width() / 2}, {duration: iAnimationDuration, easing: "easeOutQuint"});
  $(".bio").animate({height: 2000, opacity: 1}, {duration: iAnimationDuration, easing: "easeOutQuint"});
  $(".biopic").animate({height: 154, opacity: 1}, {duration: iAnimationDuration, easing: "easeOutQuint"});
  $("#background").fadeTo(iAnimationDuration, 0, "easeOutQuint");
}

function onDoneClick() {
  _clicked = false;
  $("#bioText").html("BIO &gt;&gt;");

  $(".page_nav").animate({left:_originalLeft}, {duration: iAnimationDuration, easing: "easeOutQuint"});
  $(".bio").animate({height: 0, opacity: 0}, {duration: iAnimationDuration, easing: "easeOutQuint"});
  $(".biopic").animate({height: 0, opacity: 0}, {duration: iAnimationDuration, easing: "easeOutQuint"});

  $("#background").fadeTo(iAnimationDuration, 1, "easeOutQuint");
}

$(window).resize(function(){
  if (_clicked) {
    $(".page_nav").css("left", $(window).width() / 2 - $(".page_nav").width() / 2 );
  }
})
