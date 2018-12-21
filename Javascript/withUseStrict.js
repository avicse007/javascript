'use strict';
 var obj = {
   a:{
     b:{
       c:'Hello'
     }
   }
 };


var c ="This is important";

console.log(obj.a.b.c);
with(obj.a.b){
  console.log(c);
}

/*
Exception: SyntaxError: strict mode code may not contain 'with' statements
@Scratchpad/5:14
*/