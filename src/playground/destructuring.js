// console.log('ES6 object destructuring');

// const person = {
//   name: 'Mike',
//   age: 73,
//   location: {
//     city: 'Wanneroo',
//     temp: 27
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// };

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

console.log('ES6 array destructuring');

// const address = [
//   '18 Jacob Close',
//   'Wanneroo',
//   'Western Australia',
//   '6065'
// ];

// const [, city, state = 'WA'] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = [
  'Coffee (iced)',
  '$2.00',
  '$2.25',
  '$2.75'
];

const [drink, , cost] = item;

console.log(`A medium ${drink} costs ${cost}.`);