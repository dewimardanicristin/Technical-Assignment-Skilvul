//soal1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(string) {
        return "hello, " + string;
    }
  }
  
  person.name = 'Dewi Mardani Cristin';
  person.favDrinks[1] = 'tap water';
  ////console.log(person.favDrinks[1])
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));

  //soal2
  function getObjectValue(obj,path) {
    let splitPath = path.split('.');
    let result = obj;
    for (let i=0; i<splitPath.length; i++) {
        if (Object.keys(result).includes(splitPath[i])) {
            result = result[splitPath[i]];
        } else {
            result = null;
            break;
        }
    }
    return result;
  }

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

//soal3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
  return items.reduce((acc, curr) => {
    let btcSum = curr.btc.sell - curr.btc.buy;
    let dogeSum = curr.doge.sell - curr.doge.buy;
    let ethSum = curr.eth.sell - curr.eth.buy;
    return {
        btc: acc.btc + btcSum,
        doge: acc.doge + dogeSum,
        eth: acc.eth + ethSum,
    };
}, 

{
    btc: 0,
    doge: 0,
    eth: 0
});
}
console.log(calculateIncome(items))
