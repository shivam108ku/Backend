function wrapInArray<T>(item:T): T[]{
    return [item];
} 

wrapInArray("masala");
wrapInArray(42);
wrapInArray({flavour: "Ginger"});

function pair<A,B>(a:A , b:B):[A,B]{
    return [a, b];
}


let schoolName2 : "DPS" | "DAV" = "DPS";
let another: string = "KV";

another = schoolName2; 


type Complex2 = {
    real: number,
    imag: number
}

interface IComplex {
    real: number,
    imag: number
}


let c3:Complex2 = {
    real: 2,
    imag: 3
}


let c4:IComplex = {
    real: 4,
    imag: 5
}


class Product {

    name: string;
    price: number;

    constructor(name:string , price:number){
        this.name = name;
        this.price = price;
    }

    display3():void{
        console.log("Product name is ", this.name, "and price", this.price);
    }
}

const p1= new Product("Iphone", 10000);
console.log(p1);