// scope
// function fooFuncionscoped() {
//     if(true) {
//         var x = 5;
//     }
//     console.log("Functions Scoped",x);
// }

// function fooblockScoped() {
//     if(true) {
//         var x = 5;
//     }
//     console.log("Block Scoped",x);
// }

// // redeclaration

// function redeclaration() {
//     if(true) {
//         var x = 5;
//     }

//     console.log("Block Scoped",x);
// }
// fooFuncionscoped();
// fooblockScoped();
// redeclaration();

// // Hosting
// fooHosted();
// function fooHosted() {console.log("blibli")}

// // global

// var maVarX = 10;
// let myVarNotGlobal = 10;
// const  myVarConstNotGlobal = 10;
// console.log(window);

// function fooClassic() {
//  return "test";
// }

// const flechee = (f) => `flechée${f}`;

// console.log(fooClassic());
// console.log(flechee(42));

// // spread and rest operators
// const arr = [1,2,3,4,5];
// console.log(arr);

// const arr2 = [...arr, 6];
// console.log(arr2);

// function add(a,b) {
//     return a + b;
// }
// console.log(add(2,2));

// function add2(...args) {
//     return args;
// }

// console.log(add2(2,2));

// function add3(a,b,...args) {
//     let result = 0;
//     for(const arg of args) {

// result +=arg;

//     }

//     return result + a + b;
// }

// console.log(add3(2,2, 3,6));

// // pure function

// let global = 12;
// const add12 = y => global += y;
// console.log(add12(12));

// const add13 = (y,x) => y + x;
// console.log(add13(12, 12));

// // Fonction ordre superieur


const rawArr = [3, 4, 5, 34, 54, 6, 34543, 44, 522, 978, 15195, 4454];
console.log(rawArr);

// for(let i = 0; 1 < rawArr.length; i++) {
//     if(rawArr[i] > 100) {
//         newArr.push(rawArr[i]);
//     }
// }

const hofAdd = (arr, fn) => {
  const newArr = [];
  for (let i = 0; 1 < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// console.log(rawArr);

console.log(
  hofAdd(rawArr, (value) => {
    return value > 100;
  })
);
