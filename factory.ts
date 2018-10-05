interface Purchase{
    product_name:string;
    product_quantity:number;
    product_price:number;
    product_seller:string;
}
interface Make{
    rmaterial_name:string;
    rmaterial_quantity:number;
    rmaterial_price:number;
}
interface Sell{
    soldproduct_name:string;
    product_totalCount:number;
    soldproduct_price:number;
    
}
interface ColdDrink{
    purchase: ()=>void;
    make:()=>void;
    sell:()=>void;
    Purchase:Purchase;
    Make:Make;
    Sell:Sell;
}

function factory(products:ColdDrink){


    function purchase(){
        console.log(`Product Details Which has puchased by company :
        ${products.Purchase.product_name}
        ${products.Purchase.product_quantity}
        ${products.Purchase.product_price}
        ${products.Purchase.product_seller}`);
        
    }
    function make(){
        console.log(`Raw Material Details :
        ${products.Make.rmaterial_name}
        ${products.Make.rmaterial_quantity}
        ${products.Make.rmaterial_price}`);
        
    }
    function sell(){
        console.log(`Product Details Which has sold to customer :
        ${products.Sell.soldproduct_name}
        ${products.Sell.product_totalCount}
        ${products.Sell.soldproduct_price}`);
        
    }
}

factory({
    rmaterial_name:"plastic",
    rmaterial_quantity:5000,
    rmaterial_price:800,
    product_name:"motherboard",
    product_quantity:50,
    product_price:5000,
    product_seller:"intell",
    soldproduct_name:"laptop",
    product_totalCount:100,
    soldproduct_price:70000

})