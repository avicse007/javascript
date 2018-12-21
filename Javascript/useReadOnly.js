/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//'use strict'

var obj = {};
Object.defineProperty(obj,'myProp',{
                      value :'This is read-only property',
                      writable : false,
                      enumerable : false,
                      configurable : false         
                      });

//obj.myProp = "Hello ";
console.log(obj.myProp);

/*
undefined
*/