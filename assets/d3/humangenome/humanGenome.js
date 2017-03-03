///////////////////////////////////////////////////////////////////////////
//////////////////// Set up and initiate svg containers ///////////////////
/////////////////////////////////////////////////////////////////////////// 

var _iAcidWidth = 240;
var _iAcidHeight = 40;
var _iAcidVertSpacing = _iAcidHeight * 2;
var _iAcidHorzSpacing = _iAcidWidth + _iAcidHeight;
var _height = 900;
var _width = 1500;
var _scale = 25;
var _centerX = _width / 2;
var _centerY = _height / 2;
var _textOffset = 20;
var _oHumanGenomeData;
var _yTot = 0;

$("#screen").height(window.innerHeight);

// define loading screen svg (24 graphics - one for each chromosome)
var svg = d3.select("#screen")
    .append("svg")
    .attr("width", _width)
    .attr("height", _height);
// append graphics and add xml loaded svg's to them. transition with a fade.
var aChr = ["chr1", "chr2", "chr3", "chr4", "chr5", "chr6", "chr7", "chr8", "chr9", "chr10", "chr11", "chr12",
    "chr13", "chr14", "chr15", "chr16", "chr17", "chr18", "chr19", "chr20", "chr21", "chr22", "chrX", "chrY"
];
var aCentromerOffset = [0, 40, 35, 115, 105, 75, 97, 110, 115, 120, 95, 140,
    10, 10, 10, -5, 10, 10, -15, -10, 5, 5, -35, 10
];
for (var i = 0; i < aChr.length; i++) {

    // create graphic for each chromosome
    svg.append("g")
        .attr("id", aChr[i])
        .attr("opacity", 0)
        .transition()
        .duration(_height)
        .delay(i * 100)
        .attr("opacity", 1);

    var x = i;
    var fFactor = 0.75;
    (function(x) {
        d3.xml("img/" + aChr[x] + ".svg").mimeType("image/svg+xml").get(function(error, xml) {
            if (error) throw error;
            if (x < 12) {
                $("#" + aChr[x]).append(xml.documentElement)
                    .attr("transform", "scale(.75) translate(" + _width / (12 * .75) * x + "," + (25 + aCentromerOffset[x]).toString() + ")")
                    .on("mouseover", function() { $(aChr[x] + "Text").fadeIn(); })
                    .on("mouseleave", function() { $(aChr[x] + "Text").fadeOut(); });
            } else {
                $("#" + aChr[x]).append(xml.documentElement)
                    .attr("transform", "scale(.75) translate(" + _width / (12 * .75) * (x - 12) + "," + (525 + aCentromerOffset[x]).toString() + ")")
                    .on("mouseover", function() { $(aChr[x] + "Text").fadeIn(); })
                    .on("mouseleave", function() { $(aChr[x] + "Text").fadeOut(); });
            }
            //.attr("transform", "scale(.75)"); //       .attr("transform","translate(" + _width/12 * x + "," + (25+aCentromerOffset[x]).toString() + ")")
        });
    })(x);
}


// now that the svgs have been loaded, we get the proper height and width for the text elements
// for (var i = 0; i < aChr.length; i++) {
// var x = d3.select("#" + aChr[i] + "> svg");
// console.log(x);
// var y = d3.select("#" + aChr[i] + "> svg").getBBox().height;
// console.log(x);
// console.log(y);
// d3.select("#" + aChr[i] + "Text")
//   .attr("transform", "translate(" + x + "," + y + ")");
// }

// attach mouseover, mouseleave, and click to the text elements
svg.selectAll("g")
    .on("mouseover", function() {
        console.log(this.id);
        d3.select("#" + this.id + "Text")
            .transition()
            .duration(1000)
            .attr("opacity", 1);
    })
    .on("mouseleave", function(d) {
        d3.select("#" + this.id + "Text")
            .transition()
            .duration(1000)
            .attr("opacity", 0);
    })
    .on("click", function() {

        // ajax request to php to get data based on the picked chromosome immediately
        sSelectedChromosome = this.id; // id is literally the string of the chromosome
        console.log(sSelectedChromosome);
        $.ajax({
            url: "humanGenome.php",
            type: "POST",
            data: { sChromosome: sSelectedChromosome, iStartIndex: 100300, iEndIndex: 101000 },
            success: function(data) {
                var _oHumanGenomeData = JSON.parse(data);
                console.log(_oHumanGenomeData);

                svg.attr("height", _oHumanGenomeData.length * _iAcidVertSpacing);

                svg.append("g")
                    .attr("id", "basePairs")
                    .attr("width", _width);
                svg.append("g")
                    .attr("id", "counter")
                    .attr("transform", "translate(" + _width / 2 + ")")
                    .attr("height", 50)
                    .attr("width", 100);
                // counting text of basepairs
                svg.selectAll("#counter")
                    .data([249250621])
                    .enter()
                    .append("g")
                    .append("text")
                    .text(0)
                    .attr("font-size", 75)
                    .attr("x", 10)
                    .attr("y", function(d, i) {
                        return 50 + i * 30
                    })
                    .transition()
                    .duration(7000)
                    .tween("text", function(d) {
                        var i = d3.interpolate(this.textContent, d),
                            prec = (d + "").split("."),
                            round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

                        return function(t) {
                            this.textContent = Math.round(i(t) * round) / round;
                        };
                    });
                //SVG container acid base pairs
                // var svgAcids = d3.select("#screen")
                //   .append("svg")
                //     .style("width", _iAcidWidth*3 + _iAcidVertSpacing)
                //     .style("height", _oHumanGenomeData.length*_iAcidVertSpacing)
                var gBasePairs = svg.selectAll("g#basePairs")
                    .data(_oHumanGenomeData) // data from the backend
                    .enter()
                    .append("g");
                // .attr("transform", function(d, i) {
                //   var y;
                //   y = parseInt((i+1) / 2)*_iAcidVertSpacing;
                //   return "translate(0," + y + ")";
                // });

                var offset0 = _width / 3 - _iAcidHorzSpacing;
                var offset1 = _width / 3;
                var offset2 = _width / 3 + _iAcidHorzSpacing;
                var offset3 = _width / 3 + _iAcidHorzSpacing * 2;
                var offset4 = _width / 3 + _iAcidHorzSpacing * 3;

                // text for base index number
                gBasePairs.append("text")
                    .attr("y", _iAcidHeight / 2)
                    .attr("font-size", 25)
                    .attr("fill", "white")
                    .attr("font-weight", "bold")
                    .attr("transform", (d, i) => "translate(" + offset0 + "," + _iAcidVertSpacing * i + ")")
                    .text(d => d.ind);

                // rect for data acid
                gBasePairs.append("rect")
                    .style("width", _iAcidWidth)
                    .style("height", _iAcidHeight)
                    .attr("fill", d => "url(#gradient-" + d.base + ")")
                    .attr("transform", (d, i) => "translate(" + offset1 + "," + _iAcidVertSpacing * i + ")");
                // rect for generated pair acid
                gBasePairs.append("rect")
                    .style("width", _iAcidWidth)
                    .style("height", _iAcidHeight)
                    .attr("fill", d => "url(#gradient-" + d.baseOpp + ")")
                    .attr("transform", (d, i) => "translate(" + offset2 + "," + _iAcidVertSpacing * i + ")");

                // text for data acid
                gBasePairs.append("text")
                    .attr("y", _iAcidHeight / 2)
                    .attr("font-size", 25)
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
                    .attr("transform", (d, i) => "translate(" + offset1 + "," + _iAcidVertSpacing * i + ")")
                    .text(d => d.base);
                //text for generated acid
                gBasePairs.append("text")
                    .attr("y", _iAcidHeight / 2)
                    .attr("font-size", 25)
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
                    .attr("transform", (d, i) => "translate(" + offset2 + "," + _iAcidVertSpacing * i + ")")
                    .text(d => d.baseOpp + " " + d.protienPos);
                // text for protien
                gBasePairs.append("text")
                    .attr("y", _iAcidHeight / 2)
                    .attr("font-size", 25)
                    .attr("fill", "white")
                    .attr("font-weight", "bold")
                    .attr("transform", (d, i) => "translate(" + offset3 + "," + _iAcidVertSpacing * i + ")")
                    .text(function(d) {
                        if (d.protienPos === 2) {
                            return d.protien;
                        } else {
                            this.destroy();
                        }
                    });

                gProtienImages.append("image")
                    .attr({ "width": "100", "height": "100" })
                    .attr("xlink:href", function(d) {
                        if (d.protienPos === 2) {
                            return "img/" + d.protien + ".svg";
                        }
                    })
                    .attr("transform", (d, i) => "translate(" + offset4 + "," + _iAcidVertSpacing * i + ")");

            }
        });

        // chromosome animation when it is selected
        for (var i = 0; i < aChr.length; i++) {
            $("#" + aChr[i]).hide(); // hide all other chromosomes
            $("#" + this.id).show();
            $("#screenTitle").hide();
            $("#screenSubTitle").hide();
            d3.select("#" + this.id)
                .transition()
                .duration(2000)
                .attr("transform", "translate(" + (window.innerWidth - this.width) + ")");
        }
    });

// title and subtitle
svg.append("g")
    .attr("id", "screenTitle");
svg.append("g")
    .attr("id", "screenSubTitle"); // x placement;
svg.select("#screenTitle")
    .append("text")
    .text("The Human Genome.")
    .attr("text-anchor", "middle")
    .attr("fill", "gray")
    .attr("font-size", 75)
    .attr("font-family", "Bungee Hairline")
    .attr("font-weight", "bold")
    .attr("transform", "translate(" + (_width / 2).toString() + "," + (_height * .85).toString() + ")")
    .attr("opacity", 0)
    .transition()
    .delay(1500)
    .duration(4000)
    .attr("opacity", 1);
svg.select("#screenSubTitle")
    .append("text")
    .text("Select any chromosome to begin.")
    .attr("text-anchor", "middle")
    .attr("class", "center")
    .attr("fill", "gray")
    .attr("font-size", 40)
    .attr("font-family", "Bungee Hairline")
    .attr("font-weight", "bold")
    .attr("transform", "translate(" + (_width / 2).toString() + "," + ((_height * .85) + 40).toString() + ")")
    .attr("opacity", 0)
    .transition()
    .delay(2500)
    .duration(4000)
    .attr("opacity", 1);

// gradient generation
var oGradientData = {
    aGradientNames: ["gradient-A", "gradient-T", "gradient-G", "gradient-C", "gradient-stop"],
    aStartColor: ["#2c7bb6", "#8e13ad", "#d7191c", "#90eb9d", "red"],
    aEndColor: ["#00ccbc", "#cc1e78", "#e76818", "#ffff8c", "red"],
    aOpacity: [1, 1, 1, 1]
};

for (i = 0; i < oGradientData.aGradientNames.length; i++) {
    tempGrad = svg.append("defs")
        .append("linearGradient")
        .attr("id", oGradientData.aGradientNames[i])
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");
    tempGrad.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", oGradientData.aStartColor[i])
        .attr("stop-opacity", oGradientData.aOpacity[i]);
    tempGrad.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", oGradientData.aEndColor[i])
        .attr("stop-opacity", oGradientData.aOpacity[i]);
}


// tooltip container (whole page)
// var tooltip = d3.select("body")
//     .append("div")
//     .style("position", "absolute")
//     .style("z-index", "10")
//     .style("visibility", "hidden");


// // mouse functions for hover
// barWrapper.selectAll(".tempBar")
//  .on("mouseover", function(d){return [tooltip.style("visibility", "visible"), tooltip.text(d.date.toString().substr(0,15) + ": Min Temp.: " + d.min_temp + ": Max Temp.: " + d.max_temp)];})
//  .on("mousemove", function(){return tooltip.style("top",
//      (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
//  .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
//  .on("mouseenter", function(d) {
//             d3.select(this)
//                .attr("stroke","black")
//                .transition()
//                .duration(1000)
//                .attr("width", 1.5*20)
//                .attr("height", function(d,i) { return (barScale(d.max_temp) - barScale(d.min_temp))*7; })           
//                .attr("stroke-width",0.25);
//         })
//         .on("mouseleave", function(d) {
//             d3.select(this).transition()            
//                .attr("width", 1.5)
//        .attr("height", function(d,i) { return barScale(d.max_temp) - barScale(d.min_temp); })
//                .attr("stroke","none");
//         });


// append text label as a child to the chromosome
window.setTimeout(function() {
    for (var i = 0; i < aChr.length; i++) {
        var width = $("#" + aChr[i] + " > svg").attr("width");
        var height = $("#" + aChr[i] + " > svg").attr("height");

        g = svg.select("#" + aChr[i]);
        g.append("text")
            .attr("id", aChr[i] + "Text")
            .attr("opacity", 0)
            .text(aChr[i])
            .attr("text-anchor", "middle")
            .attr("font-family", "Bungee Hairline")
            .attr("font-weight", "bold")
            .attr("font-size", 25)
            .attr("transform", "translate(" + width / 2 + "," + height * 1.1 + ")");
    }
}, 5000);