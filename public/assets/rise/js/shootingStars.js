(function() {
    /**
       author: @manufosela
       2013/08/27    copyleft 2013

       ShootingStar class Main Methods:
       launch: launch shooting stars every N seconds received by              param. 10 seconds by default.
        launchStar: launch a shooting star. Received options                  object by param with:
                 - dir (direction between 0 and 1)
                 - life (between 100 and 400)
                 - beamSize (between 400 and 700)
                 - velocity (between 2 and 10)
    **/

    ShootingStar = function(id) {
        this.n = 0;
        this.m = 0;
        this.options = {};
        id = (typeof id != "undefined") ? id : "";
        this.capa = ($(id).length > 0) ? "body" : id;
        this.wW = $(this.capa).innerWidth();
        this.hW = $(this.capa).innerHeight();
    };

    ShootingStar.prototype.addBeamPart = function(x, y, down) {
        this.n++;
        var name = returnRandom(100, 1);
        $("#star" + name).remove();
        $(this.capa).append("<div id='star" + name + "'></div>");
        $("#star" + name).append("<div id='haz" + this.n + "' class='haz' style='position:absolute; color:#FFD700; width:10px; height:10px; font-weight:bold; font-size:" + this.options.starSize + "px'>·</div>");
        if (this.n > 1) $("#haz" + (this.n - 1)).css({
            color: "rgba(255,215,0,0.5)"
        });
        if (down) {
          $("#haz" + this.n).css({
              top: y + this.n,
              left: x + (this.n * Math.cos(this.options.dir))
          });
        } else {
          $("#haz" + this.n).css({
              bottom: y + this.n,
              left: x + (this.n * Math.cos(this.options.dir))
          });
        }
    }

    ShootingStar.prototype.delTrozoHaz = function() {
        this.m++;
        $("#haz" + this.m).animate({
            opacity: 0
        }, 75);
    }

    ShootingStar.prototype.launchStar = function(options) {
        this.options = options;
        this.n = 0;
        this.m = 0;
        var i = 0,
            l = this.options.beamSize,
            x = returnRandom(this.wW - this.options.beamSize - 100, 0),
            y = returnRandom(this.hW - this.options.beamSize - 100, 0),
            down = Math.random() >= 0.5,
            self = this;

        for (i = 0; i < l; i++) {
            setTimeout(function() {
                self.addBeamPart(x, y, down);
            }, self.options.life + (i * self.options.velocity));
        }
        for (i = 0; i < l; i++) {
            setTimeout(function() {
                self.delTrozoHaz();
            }, self.options.beamSize + (i * self.options.velocity));
        }
        console.log("Launching shooting star. PARAMS: wW: " + this.wW + 
                                                  " - hW: " + this.hW + 
                                                  " - life: " + this.options.life + 
                                                  " - beamSize: " + this.options.beamSize + 
                                                  " - velocity: " + this.options.velocity +
                                                  " - dir: " + this.options.dir +
                                                  " - number: " + this.options.number);

    }

})();

// helper function - return random int
function returnRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
    var shootingStarObj = new ShootingStar("body");
    var number = 0;
    setInterval(function() {
        var options = {
            number: ++number,
            dir: returnRandom(2*Math.PI, 0),
            life: returnRandom(150, 100),
            beamSize: returnRandom(700, 650),
            velocity: returnRandom(10, 8)
        }
        shootingStarObj.launchStar(options);
    }, 5000);

    //returnRandom(100, 0) * 0.01,
});