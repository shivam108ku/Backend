// let id : number = 5;
// console.log(id);

// let firstName = "Shivam";
// var lastName = "Kumar";

// // Union
// let userid : number | string = "26";

//  array

// let array : number[] = [1 ,2 ,3 ];

// // hetrogenous array
// let array2 : any[] = [1,2,3,4, "false"];

// let data : (number | string)[] =[1 , 3 , 4 , 67, "dfgdf"];
// // tuple
//  let data3 : [number , string , boolean]  = [1 ,"rtrt" ,false ];
// console.log(array2);

// Types for object
// clases
// interface

// interface Product {
//     name :string;
//     price :number;
//     display() :void;
// }

// let p1 : Product = {
//     name : "Shivam",
//     price : 100000000,
//     display: ()=>{
//         console.log("first")
//     }
// }

// Types for functions

// function sum( a : number , b :  number ) : number{
//     return a + b;
// }
// b?--> optional so it will be an undefined
// Dat obj in TS

let subs: number | string = "1M";

let apirequestsStatus: "pending" | "sucess" | "error" = "pending";
let airlineSeat: "aisle" | "window" | "middle";

const orders = ["12", "34", "56", "27"];
let cu: string | undefined;

for (let order of orders) {
  if (order === "34") {
    cu = order;
    break;
  }
}
console.log(cu);


// Type Narrowing And Type Gaurds

function getChai(kind: string | number){
    if( typeof kind === 'string'){
        return `Making ${kind} chai ...`
    }
    return `Chai order: ${kind}`
}

function serverChai(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return `Serving small chai...`;
    }
    if(size === 'medium'){
        return 'Medium';
    }
    if(size === 'large'){
        return 'large';
    }
    return `chai order ${size}`
}

class kulhadChai{
    serve(){
        console.log("first")
    }
}

class cutting{
    serve(){
        console.log("second")
    }
}

function serve(chai: kulhadChai | cutting){
    if( chai instanceof kulhadChai){
        return chai.serve();
    }
}

type Chaiorder = {
    type: string
    sugar: number 
}

function isChaiorder(obj:any):obj is Chaiorder{
    return 
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.type === 'string' &&
    typeof obj.type === 'number'
}

function serveOrder(item:Chaiorder | string){
    if(isChaiorder(item)){
        return `Serving ${item.type} chai ${item.sugar} sugar`
    }
    return `Number ${item}`
}