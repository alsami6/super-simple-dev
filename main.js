// let citizen = true;
// let age = 22;
// let regs = true;

// if(age >= 18 && citizen===true && regs === true){
//     console.log('Yes you can vote');
// }
// else if(age >= 18 && regs===true && citizen===false){
//     console.log('You are not citizen of our country');
// }
// else if(age >= 18 && regs===false && citizen===true){
//     console.log("You need to regeisterd first to vote");
// }
// else if(age < 18 && citizen===true && regs === true){
//     console.log("You are under age");
// }
// else{
//     console.log("You can not vote");
// }


// let num = 20;

// if(num % 2 == 0){
//     console.log('even')
// }else{
//     console.log("odd");
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits[4] = "Pineapple";
// // fruits[5] = "Jackfruit"

// // console.log(fruits[fruits.length-1]);

// for (let index = 0; index < fruits.length; index++) {
//     console.log(fruits[index]);    
// }

// ? splice 
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

// fruits.splice(2 , 2 ,"lemon","Kiwi")
// // console.log(fruits);

// // ? concat
// const myGirls = ["selina", "bushra", "apple"]
// const myBoys = ["sami", "apple"]

// const myChildren = myGirls.concat(myBoys);
// // console.log(myChildren);

// // slice
//     let cut = fruits.slice(1, 3);
//     // console.log(cut)


const months = ["Jan", "march", "April", "June", "July"];
months.splice(months.length, 0,"dec");
// months.splice(1,1,"March");
// another method 
let indexToUpDate = months.indexOf("march");
months.splice(indexToUpDate,1,"March");

let indexToDelete = months.indexOf("June")
months.splice(indexToDelete, 0, )

console.log(months);