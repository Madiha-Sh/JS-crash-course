// var, let, const
 /*
let age = 30;
age= 30;
console.log(age);

let x;
let y = null;

console.log(typeof x);
console.log(typeof y);

const name = 'john';

// concatenation
console.log('My name is ' + name + ' and I am ' + age);

//template string
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// string properties and method

let s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

let s1 = 'technology, computers, IT, code';
console.log(s1.split(', '));

// Arrays

const a = new Array(1,2,3,4,5);
console.log(a);
console.log(Array.isArray(a));
*/
 
//object literal
// const todos = [
//   {
//     id:1,
//     text:'take out trash',
//     isCompleted:true
//   },
//   {
//     id:2,
//     text:'meeting with boss',
//     isCompleted:true
//   },
//   {
//     id:3,
//     text:'dentist appointment',
//     isCompleted:false
//   }
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

/*for(let i=0;i<todos.length;i++){
  console.log(todos[i])
}*/

// for (let todo of todos){
//   console.log(todo.text);
// }

// i = 0;
// while(i<10){
//   console.log(todos[i]);
//   i++;
// }

// todos.forEach(function(todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//   return todo.text;
// });

// console.log(todoText);


// const todoCompleted = todos.filter(function(todo) {
//   return todo.isCompleted == true;
// }).map(function(todo) {
//   return todo.text;
// })

// console.log(todoCompleted);

// const x = 20;
// const color = x < 15 ? 'red' : "yellow";

// console.log(color);


// const x = 20;
// const color = x < 15 ? 'red' : "yellow";

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'yellow':
//     console.log('color is yellow');
//     break;
//   case 'blue':
//     console.log('color is neither');
//     break;
// }

// Arrow function

// const addNum = (num1=1 , num2=1) => {
//   return num1 + num2;
// }

// console.log(addNum(5,5));


// todos.forEach((todo) => console.log(todo.text));

// ********* OOP *********

// constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// Class 
// class Person{
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
    
//   getBirthYear(){
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // object instantiation
// const person1 = new Person('John', 'Doe', '3-3-1980');

// console.log(person1);  


// DOM *********************************

// Single elements
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// // Multiple elements
// console.log(document.querySelectorAll('.item'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();
// ul.firstElementChild.remove();


// ul.firstElementChild.textContent = 'Hello';

// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello Brad!</h1>';

// document.querySelector('.btn').addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('.bg-dark');

// });  

// const myName = document.querySelector('#name');
// const myemail = document.querySelector('#email');
// const myMsg = document.querySelector('.msg');
// const userList = document.querySelector('#users');


// document.querySelector('#my-form').addEventListener('submit', onSubmit);

// function onSubmit(e){
//   e.preventDefault();
  
//   if(myName.value === '' || myemail.value === '') {
//     myMsg.classList.add('error');
//     myMsg.innerHTML = 'Please fill all the required fields';

//     setTimeout(() => myMsg.remove(),3000);
//   }
//   if(myName.value === '' && myemail.value === '') {
//     myMsg.classList.add('error');
//     myMsg.innerHTML = 'Please fill the form first';

//     setTimeout(() => myMsg.remove(),3000);
//   }
//   else{
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${myName.value} : ${myemail.value}` ));

//     userList.appendChild(li);

//     // Clear fields
//     myName.value = '';
//     myemail.value = '';
//   }
// }

//*********************************************************************
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i=0;i<companies.length;i++){
//   console.log(companies[i]);
// }

// forEach

// companies.forEach((company) => {
//   console.log(company.name);
// })

// filter

// const canDrink = ages.filter((age) => {
//   if(age>=21) {
//     return true;
//   }
// });
// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompany = companies.filter(company => company.category === "Retail");
// console.log(retailCompany);

// const eightiesCompany = companies.filter(company => (company.start >= 1980 && company.start <= 1990));
// console.log(eightiesCompany);


// const lasted10Years = companies.filter(company => (company.end - company.start >= 10));
// console.log(lasted10Years);

// map

// const companyInfo = companies.map( company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyInfo);

// const agesNew = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age*2);
// console.log(agesNew);

//sort

// const sortCompanies = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortCompanies);

// const sortAges = ages.sort((a,b) => a - b);
// console.log(sortAges);

//reduce  

// const ageSum = ages.reduce((total,age) => total + age, 0);
// console.log(ageSum);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);

// Combine Method

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a,b) => a-b)
//   .reduce((a,b) => a+b,0);

// console.log(combined);