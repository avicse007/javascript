/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


function slowPromise(){
  console.log("Starting slow promise");
  return new Promise(resolve=>{
  setTimeout(function(){resolve(20);
                       console.log("Resolving slow promise")},2000);  
  });
  
};

function slowerPromise(){
  console.log("Starting slower promise");
  return new Promise(resolve=>{
  setTimeout(function(){resolve(50);
                       console.log("Resolving slower promise")},5000);  
  });
  
};

function fastPromise(){
  console.log("Starting fast promise");
  return new Promise(resolve=>{
  setTimeout(function(){resolve(10);
                       console.log("Resolving fast promise")},1000);  
  });
  
};


slowPromise().then(slowerPromise).then(fastPromise);


/*
//Output
Starting slow promise Scratchpad/2:12:3
Resolving slow promise Scratchpad/2:15:24
Starting slower promise Scratchpad/2:21:3
Resolving slower promise Scratchpad/2:24:24
Starting fast promise Scratchpad/2:30:3
Resolving fast promise Scratchpad/2:33:24 


*/