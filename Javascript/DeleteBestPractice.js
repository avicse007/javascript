'use strict';

var obj = {a:10,b:20};
var myVar = 30;

delete obj.a;
delete myVar;
delete obj;
console.log(obj); // Object{B:20}
console.log(myVar); // 30 