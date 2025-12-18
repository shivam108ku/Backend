const chaiFlavours: string[] = ["Masala" , "Adrak"];
const pricing : number[] = [10 , 20];

// second way to define array 
const rating: Array<number> = [4.5];

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: 'Masala' , price: 15},
    {name: 'Masalas' , price: 25},
]

// after adding the radonly property we can not modifiy this array
const cities: readonly string[] = ["Delhi" ,"Varanasi"];

// 2d array
const table: number[][] = [
    [1,2,3,4],
    [4,5,6]
]

// Tuples

let chaiTuple : [string, number];
chaiTuple = ["Masala", 20]; // isme order bhi dekhna hoga aur aati array me hi h 

// Readonly tuples

const locations: readonly [number , string] = [23 , "45" ];

// Named tuples
const chaiItems: [name: string , price:number] = ["Masala" , 23];

// Enums
enum CUpSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CUpSize.LARGE