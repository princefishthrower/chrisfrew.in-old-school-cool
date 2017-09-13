var shovel =
  "data:image/png;base64,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";

var dirtPile =
  "data:image/png;base64,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";

// non Pixi related: play an mp3!
new Audio("mp3/spinthunk.mp3").play();


var app = new PIXI.Application(500, 500, { backgroundColor: 0xffffff });
document.body.appendChild(app.view);

// SHOVEL STUFF //
// create a new Sprite from image data
var shovel = PIXI.Sprite.fromImage(shovel);
// center the sprite's anchor point
shovel.anchor.set(0.5);
// move the sprite to the center of the screen
shovel.x = 0;
shovel.y = 0;
app.stage.addChild(shovel);

// PILE STUFF //
// create a new Sprite from image data
var dirtPile = PIXI.Sprite.fromImage(dirtPile);
// center the sprite's anchor point
dirtPile.anchor.set(0.5);
// move the sprite to the center of the screen
dirtPile.x = 280;
dirtPile.y = 335;
app.stage.addChild(dirtPile);

// Listen for animate update
app.ticker.add(function(delta) {
  var multiplier = 2
  //var iRotateValue = 49.3 / multiplier;
  var iRotateValue = 49.75*2 / multiplier;

  if (shovel.rotation < iRotateValue) {
    shovel.rotation += 0.3908 * delta;
    shovel.x += multiplier * delta;
    shovel.y += multiplier * delta;
  }
  // } else if (shovel.rotation >= iRotateValue) {
  //   shovel.alpha -= 0.001 * delta;
  //   dirtPile.alpha -= 0.001 * delta;
  // }
});