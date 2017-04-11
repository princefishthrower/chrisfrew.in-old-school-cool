var _originalLeft; // original css 'left' value of page nav - first evaluated only after user clicks bio link
var _clicked; // global var to tell if user has clicked link yet
var _iAnimationDuration = 2000; // global animation grow/slide time in ms

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
  $(".page_nav").animate({left: $(window).width() / 2 - $(".page_nav").width() / 2}, {duration: _iAnimationDuration, easing: "easeOutQuint"});
  $(".bio").css("display", "block");
  $(".bio").show().animate({height: 2000, opacity: 1}, {duration: _iAnimationDuration, easing: "easeOutQuint"});
  $(".biopic").animate({height: 154, opacity: 1}, {duration: _iAnimationDuration, easing: "easeOutQuint"});
  $("#background").fadeTo(_iAnimationDuration, 0, "easeOutQuint");
}

function onDoneClick() {
  _clicked = false;
  $("#bioText").html("BIO &gt;&gt;");
  $(".page_nav").animate({left:_originalLeft}, {duration: _iAnimationDuration, easing: "easeOutQuint"});
  $(".bio").animate({height: 0, opacity: 0}, {duration: _iAnimationDuration, easing: "easeOutQuint"}).hide(0);//
  $(".biopic").animate({height: 0, opacity: 0}, {duration: _iAnimationDuration, easing: "easeOutQuint"});
  $("#background").fadeTo(_iAnimationDuration, 1, "easeOutQuint");
}

$(window).resize(function(){
  if (_clicked) {
    $(".page_nav").css("left", $(window).width() / 2 - $(".page_nav").width() / 2 );
  }
})
