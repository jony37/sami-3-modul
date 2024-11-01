// // 49 dars SERVER NIMA
// ""

// // 50 dars Winga XAMPP yuklash
// ""

// // 51 JSON Chuqur clonlash

// const car = {
//     name: "BMW",
//     color: "red",
//     extra: {
//         isAirbag: false,
//         balon: 5
//     }
// }

// // objecti jsonga ugirib beradi
// const objTOJson = JSON.stringify(car);
// console.log(objTOJson);

// // Jsondi objctga ugirib beradi
// const JsonToObj = JSON.parse(objTOJson);
// console.log(JsonToObj);

// // objecti chuqur clonlash
// const clone = JSON.parse(JSON.stringify(car))
// console.log(clone );

// // // 52 DARS AJAX
// const uzs = document.querySelector('#uzs'),
// usd = document.querySelector('#usd');

// uzs.addEventListener('input', function () {
//     const request = new XMLHttpRequest();
//     request.open('GET', "./assest/json/app.json");
//     request.setRequestHeader('Content-Type', 'application/jsonl; charset=utf-8');
//     request.send();

//     request.addEventListener('load', function () {

//         if (request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             usd.value = (+uzs.value / data.current.usd);
//         } else {
//             usd.value = '404 Not found'
//         }
//     })
// })

// 55 DARS Promise
// const isFrendCome = true;

// const meetingRequest = new Promise((resolve, reject) => {
//   if (isFrendCome) {
//     const msg = "Friend Iam there";
//     resolve(msg);
//   } else {
//     const err = "I can not come there";
//     reject(err);
//   }
// });

// meetingRequest
//   .then((msg) => console.log(msg))
//   .catch((msg) => console.log(msg))
//   .finally(() => console.log("I am colling you Joha"));

// console.log("Request data...");

// setTimeout(() => {
//     console.log('Processing data...');

// const product = {
//     name: "car",
//     color: "black"
// };

//     setTimeout(() => {
//         product.status = "order";
//         console.log(product);

//     }, 2000);
// }, 2000)

// console.log("Request data...");
// const request = new Promise((resolve) => {
//   setTimeout(() => {
//     const product = {
//       name: "car",
//       color: "black",
//     };
//     console.log("Processing data...");

//     resolve(product);
//   }, 2000);
// });

// request.then((data) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             data.status = "ordered";
//             console.log("Get data...");
//             resolve(data);
//         }, 2000);
//     })
// })
// .then((result) => console.log(result))
// .catch(() => console.log("Somethink went wrong"))
// .finally(() => console.log("Fetching end"));

// 56 DARS PROMISE METHOD
// const request = (time) => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), time)
//     })
// }

// // request(1000).then(() => console.log("Request 1000 ms"))
// // request(2000).then(() => console.log("Request 2000 ms"))
// // request(3000).then(() => console.log("Request 3000 ms"))

// Promise.all([request(1000), request(2000), request(3000)]).then(() => {
//     console.log("All");
// })

// Promise.race([request(1000), request(2000), request(3000)]).then(() => {
//     console.log("All");
// })

// // 57 dars Featch Api
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({name: 'jony'}),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// 58 dars Map Filter Reduce
// // Map method 
// const car = ['MErc', 'BmW', "RolCE RoyCe"];
// const arr = car.map((item) => item.toLowerCase())
// console.log(arr);

// // Filter methodi
// const car = ['mercedes benz', 'bmw', 'audi', 'rollce royce'];
// const arr = car.filter(item => item.length < 5)
// console.log(arr);

// // Some every
// const arr = [1, 'samar', true];
// console.log(arr.some(item => typeof(item) === 'number'));

// Reduce
// const arr = [4, 32, 1,3]
// //                   10 || 0     4
// //                         4     32
// //                        36     1
// //                        37     3
// //                        40     0
// const joha = arr.reduce((sum, current ) => sum + current, 10);
// console.log(joha);

// const car = ['bmw', 'mers', 'porshe'];
// const res = car.reduce((cum, current) => `${cum}, ${current}`);
// console.log(res);

// 59 NPM
// ""

// 60 Json server amaliyot
// ""

// 61 Async / Await amaliyot
// ""



