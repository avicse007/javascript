'use strict';
var obj = {
  val : "Hello there",
  printVal : function(){
    console.log(this);
    console.log(this.val);
  }
};

//obj.printVal(); //Gives Hello there which is ok

obj2 = {
  val : "Bye there"
};

obj2.printVal = obj.printVal

//obj2.printVal(); //Gives by there which is ok
'use strict';
var print = obj.printVal;
print();
