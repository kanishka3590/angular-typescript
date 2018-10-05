//here dimention is any type
function tailor(dimention) {
    var shirtlength = dimention.shirtlength;
    var collarlength = dimention.collarlength;
    var slvlength = dimention.slvlength;
    var isButton = dimention.isButton;
    console.log("Dimention: " + shirtlength + "  " + collarlength + " " + slvlength + " " + isButton + " ");
    console.log(dimention.stitch('green'));
}
tailor({
    shirtlength: '20cm',
    collarlength: '2cm',
    slvlength: '10cm',
    // isButton:true,
    stitch: function (color) {
        return "My Stitch " + color;
    }
});
