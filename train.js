// MIT TASK H 
function getPositive(arrs) {
  result = arrs.filter((num) => num > 0).join("");
  return result;
}

console.log(getPositive([2, 34, -4, 2, -9]));

//MIT TASK G
// function getHighestIndex(arr) {
//   let highestValue = arr[0];
//   let highestIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highestValue) {
//       highestValue = arr[i];
//       highestIndex = i;
//     }
//   }
//   return highestIndex;
// }
// console.log(getHighestIndex([234, 777, 212, 2, 12, 124]));//1

// function getHighestIndex(arr) {
//   let biggest = Math.max(...arr);
//   return arr.indexOf(biggest);
// }

// console.log(getHighestIndex([234, 212, 2, 555, 12, 124]));
//MIT TASK F
// function findDoublers(value) {
//   const letter = value.split("")
//   return letter.some((i) => {
//     return letter.indexOf(i) !== letter.lastIndexOf(i)
//   })
// }
// console.log(findDoublers("banana"))

//MIT TASK E
// function reverse(value) {
//   return value.split("").reverse().join("");
// }
// console.log(reverse("world"));

//MIT TASK D
// function add(first, second) {
//   return first.split("").sort().join("") === second.split("").sort().join("");
// }
// console.log(add("yours", "sruoy"));

//MIT TASK C
// class Shop {
//   constructor(milk, water, chips) {
//     this.milk = milk;
//     this.water = water;
//     this.chips = chips;
//   }
//   getTime() {
//     const now = new Date();
//     return now.getHours() + ":" + now.getMinutes();
//   }
//   inStock() {
//     console.log(
//       `hozir ${this.getTime()} da ${this.milk} ta sut, ${this.water} suv va ${this.chips} chips bor `,
//     );
//   }
//   sell(product, amount) {
//     if (this[product] >= amount) {
//       this[product] -= amount;
//     } else {
//       console.log("mahsulot yetarli emas");
//     }
//   }
//   receive(product, amount) {
//     this[product] += amount;
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.inStock();
// shop.sell("milk", 3);
// shop.receive("chips", 4);
// shop.inStock();

// //MIT TASK B
// function countNumber(string) {
//   let count = 0
//   for(let i = 0; i < string.length; i++) {
//     if(string[i] >= '0' && string[i] <= '9') {
//       count += 1
//     }
//   }
//   return count
// }
// console.log(countNumber("jioseyf093275iojqwd"))

//MIT TASK A

// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(countLetter("o", "football"));

// const { resolveInclude } = require("ejs");

//CALLBACK

// const list = [
//   "bee a good student", //0-20
//   "make me proud", //20-30
//   "keep pushing", //30-40
//   "give back to society", //40-50
//   "rest now", //50-60
//   "sleep now ", //60
// ];
// function giveAdvice(a, callback) {
//   if (typeof a !== "number") callback("pls write a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(() => {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// giveAdvice(55, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");

//ASYNC/AWAIT FUNCTION

// const list = [
//   "bee a good student", //0-20
//   "make me proud", //20-30
//   "give back to society", //40-50
//   "rest now", //50-60
//   "sleep now ", //60
// ];
// async function giveAdvice(a, callback) {
//   if (typeof a !== "number") throw new Error("pls write a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//     // setTimeout(() => {
//     //   callback(null, list[5]);
//     // }, 5000);
//   }
// }

//THEN/CATCH
//call 1
// console.log("passed here 0");
// giveAdvice(20)
//   .then((data) => {
//     console.log("answer:", data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });
// console.log("passed here");

//call 2
// async function run() {
//   let result = await giveAdvice(20);
//   console.log(result);
//   result = await giveAdvice(60);
//   console.log(result);
//   result = await giveAdvice(41);
//   console.log(result);
// }
// run();

//setInterval
// function giveAdvice(a, callback) {
//   if (typeof a !== "number") callback("pls write a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// giveAdvice(70, (err, data) => {
//   if (err) console.log("error:", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");
