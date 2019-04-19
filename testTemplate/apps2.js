// // //console.log('new')
// // // let day;
// // // switch (new Date().getDay()) {
// // //   case 0:
// // //     day = 'Sunday';
// // //       break;
// // //   case 1:
// // //     day = 'Monday';
// // //       break;
// // //   case 2:
// // //     day = 'Tuesday';
// // //       break;
// // //
// // // }
// // //
// // // console.log(day);
// //
// //
// // var Animal = 'Cow';
// //
// // function shouldBeOnArk(animal) {
// //   switch (animal) {
// //     case 'Cow':
// //     case 'Giraffe':
// //     case 'Dog':
// //     case 'Pig':
// //       console.log('This animal will go on Noah\'s Ark.');
// //     break;
// //   case 'Spoon':
// //     console.log('A spoon is not an animal!');
// //     break;
// //     case 'Dinasoar':
// //     default:
// //     console.log('This animal will not be on the Ark.');
// //     break;
// //   }
// // }
// //
// // shouldBeOnArk('Dog');
// //
// // function hello() {
// //   return "world";
// // }
// //
// // var message = hello();
// //
// // var Animal = ""
// //
// // const addOneToOne = () => {
// //   console.log('Hey adding numbers!')
// //   return 1 + 1;
// // }
// //
// // timeFuncRuntime(() => 1 + 1);
// //
// // var button = document.querySelector('#button');
// //
// // button.addEventListener('click', () => {
// //
// // })
// //
// // const addOneToOne = () => 1 + 1;
// // const addOneToOne = () => {
// //   return 1 + 1;
// // }
// //
// // const addOneToOne = () => console.log("message");
// //
// // const uppercase = (message) => {
// //   return message.toUpperCase()
// // }
// //
// // console.log(uppercase("this is the message"));
//
// // function getData(url) {
// //   this.loading = true;
// //   var self = this;
// //   axios.get(url)
// //   .then(function(data) {
// //     self.loading = false;
// //   })
// // }
// //
// // function getData(url) {
// //   this.loading = true;
// //   axios.get(url)
// //   .then((data) => {
// //     this.loading = false;
// //   })
// // }
// //
// // const function = () => {}
//
// // function Animal(name) {
// //   this.name = name;
// // }
// //
// // Animal.prototype.speak = function() {
// //   console.log(this.name)
// // }
// //
// // const dog = new Animal("fido");
// // const cat = new Animal("felix");
// //
// // dog.name = "bob";
// //
// // dog.speak();
// // cat.speak();
//
// function ShoppingCart() {
//   this.items = [];
// }
//
// ShoppingCart.prototype.getTotal = function() {
//   let total = 0;
//
//   for(let i = 0; i < this.items.length; i++) {
//     total += this.items[i].price;
//   }
//
//   return total;
// }
// ShoppingCart.prototype.addItem = function(item) {
//   this.items.push(item);
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const cart = new ShoppingCart();
//
// cart.addItem({
//   name: "apple",
//   price: 2,
// })
// cart.addItem({
//   name: "pear",
//   price: 50,
// })
//
// console.log(cart.items)
// console.log(cart.getTotal())

let now = Date();
let myAge(now.getFullYear() - 1987);
let earlyYears = 2;



console.log(myAge);
