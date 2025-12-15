let id : number = 5;
console.log(id);

let firstName = "Shivam";
var lastName = "Kumar";

// Union 
let userid : number | string = "26";

//  array 

let array : number[] = [1 ,2 ,3 ];

// hetrogenous array 
let array2 : any[] = [1,2,3,4, "false"];

let data : (number | string)[] =[1 , 3 , 4 , 67, "dfgdf"]; 
// tuple
 let data3 : [number , string , boolean]  = [1 ,"rtrt" ,false ]; 
console.log(array2);

// Types for object 
// clases
// interface

interface Product {
    name :string;
    price :number;
    display() :void;
}

let p1 : Product = {
    name : "Shivam",
    price : 100000000,
    display: ()=>{
        console.log("first")
    }
}

// Types for functions

function sum( a : number , b :  number ) : number{
    return a + b;
}
// b?--> optional so it will be an undefined
// Dat obj in TS
const ob = new Date();