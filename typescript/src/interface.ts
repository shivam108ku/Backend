interface Chai2 {
  flavour: string;
  price: number;
}

const masala: Chai2 = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "ChaiCode Caffe",
};

interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p)=>{
    return p * 0.5;
}

interface TeaMachine {
    start(): void;
    stop(): void
}

const machine:TeaMachine = {
    start(){
        console.log("Start");
    },
    stop(){
        console.log("Stop")
    }
}


//  Generics



