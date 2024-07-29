const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "King");
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Queen");
});

Promise.race([myPromise1, myPromise2])
  .then((x) => {
    console.log(x);
  })
  .catch((error) => {
    console.log(error);
  });

promiseRacePolyfill([myPromise1, myPromise2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

function promiseRacePolyfill(tasks) {
    return new Promise((resolve, reject) => {
    tasks.forEach((promise) => {
      promise
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    });
  });
}
