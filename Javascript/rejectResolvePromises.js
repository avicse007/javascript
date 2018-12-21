let rejectPromise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
rejectPromise2.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);
let resolvePromise1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
resolvePromise1.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);