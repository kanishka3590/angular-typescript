//interface is blue print we have to be implemented.
interface Shirt{
    shirtlength:string;
    collarlength:string;
    slvlength:string;
    isButton?:boolean;  //Now it will become optional.
    stitch: (color)=>string; //function

}

//here dimention is any type
function tailor(dimention:Shirt){
    let shirtlength = dimention.shirtlength;
    let collarlength = dimention.collarlength;
    let slvlength =dimention.slvlength;
    let isButton=dimention.isButton;
    console.log(`Dimention: ${shirtlength}  ${collarlength} ${slvlength} ${isButton} ` );
    console.log(dimention.stitch('green'));
    
    
}
tailor({
    shirtlength:'20cm',
    collarlength:'2cm',
    slvlength:'10cm',
   // isButton:true,
   stitch:function(color){
       return "My Stitch "+color;
   }
})