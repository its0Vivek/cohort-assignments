
//Q1
// let firstName = "Vivek ";
// let lastName = "Mali";

// console.log("Welcome " + firstName + lastName)


/////////////////////////////////////////////////////////////
//Q2
// let name = "neha";
// let gender = 'female';

// if (gender == 'male') {
//     console.log("hi " + name + " your male")
// } else {
//     console.log('HI ' + name + " Your female")
// }

///////////////////////////////////////////////////////
//Q3
//print number from 1 to n number
// let n = 1;
// for (i = 1; i < 1000; i++) {
//     console.log(n);
//     n++;
// }

/////////////////////////////////////////////////////////
// Array
//print even no from array
//Q1
// let age = [23, 24, 15, 35, 46, 68, 56, 45, 22, 33, 44, 55, 66, 77, 88];

// for (i = 0; i <= age.length; i++) {
//     if (age[i] % 2 == 0) {
//         console.log(age[i]);
//     }
// }

///////////////////////////////////////////////////
//Q2
// object in array

// let alluser = [{
//     name: "Vivek",
//     gender: "male"
// }, {
//     name: "soham",
//     gender: "male"
// }, {
//     name: "niku",
//     gender: "male"
// }, {
//     name: "sonali",
//     gender: "female"
// }]

// for (let i = 0; i <= alluser.length; i++) {
//     if (alluser[i]["gender"] == "male") {
//         console.log(alluser[i]);
//     }
// }

//////////////////////////////////////////////
//Q3
//biggest number
// let age = [23, 924, 15, 35, 46, 698, 56, 145, 22, 33, 44, 55, 6686, 77, 88];
// let num = 0;
// for (i = 0; i <= age.length; i++) {
//     if (age[i] > num) {
//         num = age[i];
//     }

// }
// console.log(num);

///////////////////////////////////////////////////////////
//Q4
// let age = [23, 924, 15, 35, 46, 698, 56, 145, 22, 33, 44, 55, 6686, 77, 88];


// let ask = age.reverse();
// console.log(ask)

//////////////////////////////////////////
//function 
// function sum(a, b) {
//     let val = a + b;
//     return val;
// }

// const num = sum(3, 5);
// console.log(num);

///////////////////////////////////
//call backfunction 

// function math(a, b, functioncallback) {
//     let vals = functioncallback(a, b);
//     return vals;
// }

// function sum(a, b) {
//     let val = a + b;
//     return val;
// }

// let n = sum(5, 10, sum);
// console.log(n);

/////////////////////////////////////////
// //Q1
// // countdown from 30 to 0
// let time = 1

// function clock() {
//     // for (i = 1; i <= 30; i++) {
//     //     let clock = (time++)
//     //     console.log(clock)
//     //     i++;
//     // }
//     console.log(time++);
//     setTimeout(clock, 1 * 1000);
// }
// setTimeout(clock, 1 * 1000);
// // for (i = 1; i <= 30; i++) {
// //     setTimeout(clock, 1 * 1000)
// //     i++;
// // }


function clock() {
    for (let i = 0; i++; i <= 30) {
        setTimeout(() => { console.log(i + 1) }, 1000);
    }
}
clock();

