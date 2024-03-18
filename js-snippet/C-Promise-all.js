// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Queen");
});

// Both resolve, who is faster? race any
Promise.all([myPromise1, myPromise2]).then((x) => {
  console.log(x);
});