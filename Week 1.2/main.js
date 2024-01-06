//loops & condition
// console.log("hello world");

// let num = 1;
// let ans = 0;

// for (let i=0; i<=1000; i++) {
//     ans += i;   
// }console.log(ans);
//////////////////////////////////////////////
//  basics



/////////////////////////////////////////////////////////////////////
// arrays

// const age = [23, 42, 34, 33, 67, 22]

// for (let i = 0; i < age.length; i++) {
//     if (age[i] % 2 == 0) {
//         console.log(age[i])
//     }
// }

///////////////////////////////////////////////////////
//object 

// let sum = 0;

// for (let i = 0;i <100000000;i++) {
//     sum = sum + i;

// }
// console.log(sum);
///////////////////////////////////////////////////////////////
//functioncallback


// let firstName = "vivek mali";
// let age = 20;
// let ismarried = true;

// if (ismarried) {
//     console.log("is married")
// } else {
//     console.log("is not married")
// }

function clock() {
    for (let i = 0; i++; i < 30) {
        setTimeout(() => { console.log(i + 1) }, 1000);
    }
}
clock();
