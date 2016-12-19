// beer data can be added as an entity below.
// format is: name and image
// then data points below
var beerData = [{
    beerName: "Frastanzer Gold Spezial",
    imgpath: "img/goldspezial.png",
    abv: 5.0,
    price: 0.92,
    vol: { amount: 0.50, unit: "L" },
    ibu: 4,
    cals: 120
}, {
    beerName: "Frastanzer Jubilaum",
    imgpath: "img/jubilaum.png",
    abv: 5.0,
    price: 0.87,
    vol: { amount: 0.50, unit: "L" },
    ibu: 5,
    cals: 120
}, {
    beerName: "Frastanzer S'dunkle",
    imgpath: "img/sdunkle.png",
    abv: 5.6,
    price: 0.45,
    vol: { amount: 0.33, unit: "L" },
    ibu: 6,
    cals: 120
}, {
    beerName: "Frastanzer Natur Radler",
    imgpath: "img/naturradler.png",
    abv: 2.6,
    price: 0.70,
    vol: { amount: 0.50, unit: "oz" },
    ibu: 14,
    cals: 120
}, {
    beerName: "Sierra Nevada Pale Ale",
    imgpath: "img/sierranevadapaleale.png",
    abv: 5.6,
    price: 3.99,
    vol: { amount: 12, unit: "oz" },
    ibu: 37,
    cals: 120
}, {
    beerName: "Brew Dog Punk IPA",
    imgpath: "img/brewdogpunkipa.png",
    abv: 5.6,
    price: 3.99,
    vol: { amount: 12, unit: "oz" },
    ibu: 37,
    cals: 120
}];
// {
//     name: "Sierra Nevada Pale Ale",
//     abv: 5.6,
//     price: 3.99,
//     ibu: 37
// }, {
//     name: "Sierra Nevada Torpedo",
//     abv: 7.2,
//     price: 3.99,
//     ibu: 65
// }, {
//     name: "Frastanzer Helles",
//     abv: 5.0,
//     price: 0.78,
//     ibu: 3
// }, 
// }, {
//     name: "Guinness Stout",
//     abv: 5.0,
//     price: 0.98,
//     ibu: 14
// }, {
//     name: "Guinness Extra Stout",
//     abv: 5.0,
//     price: 0.23,
//     ibu: 14
// }, {
//     name: "Hop Wallop",
//     abv: 5.0,
//     price: 0.15,
//     ibu: 14
// }];
// data for our charts (title of chart, attribute of the data to to plot, if the create function has been fired or not)
var chartData = [{
    chartNumber: 1,
    attribute: "price",
    chartTitle: "Price Per Beer"

}, {
    chartNumber: 2,
    attribute: "abv",
    chartTitle: "Alcohol By Volume (ABV)"

}, {
    chartNumber: 3,
    attribute: "ppa",
    chartTitle: "Price Per Amount Alcohol (\u20AC / Liter Alc.)"

}, {
    chartNumber: 4,
    attribute: "ibu",
    chartTitle: "International Bitterness Unit (IBU)"
}, {
    chartNumber: 5,
    attribute: "vol",
    chartTitle: "Typical Size of Bottle"
}, {
    chartNumber: 6,
    attribute: "cals",
    chartTitle: "Calories per Bottle"
}];