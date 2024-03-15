class CustomArray extends Array {
  constructor(...args) {
    super(...args);
    alert('Array has been called!');
  }
}

let customArr = new CustomArray(1, 2, 3); // Creating a custom array
console.log(customArr); // Output: [1, 2, 3]
