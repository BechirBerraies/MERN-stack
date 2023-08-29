
// Function 1 

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// My prediction :  The output will be the same for both functions 
// Reality : RendomCAr output : Tesla ; otherRandomcar output : Mercedes 



// FUNCTION 2 



// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output

// console.log(otherName);

// Prediction : it will only output Elon the other will make error 


// FUNCTION 3 


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

//Prediction : He will have error undefined for Hashed password since it's not in person , he can log password tho 


//FUNCTION  4 

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);


// prediction : 
//first log : 2 == 5
// 2 == 2 

// reel result = false ; true 



// FUNCTION 5 

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);


// output 
// first log : value 
// log 2 : 1 
// error message undefined 
// no 


// reel outpout 
// value 
//[1,5,1,1,8,3,3]
//1
//5






// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//       {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//       },
//       {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//       }
//     ],
//     createdAt: 1543945177623
//   };

//   const { firstName, lastName, ...attributes } = person;
//   console.log(attributes);



// const square = n => n * n;
// console.log(square(5));

