var foo = "bar";
function bar(){
var foo="baz";
console.log("inside bar the foo is ",foo);
}

function baz(foo){
foo="bam";
bam="yay";
console.log("Inside baz the foo and bam is ",foo,bam);
}

bar();
baz("hello");
console.log("In global foo is ",foo);
console.log("In global bam is ",bam);
/*
out Put
VM1223:4 inside bar the foo is  baz
VM1223:10 Inside baz the foo and bam is  bam yay
VM1223:15 In global foo is  bar
VM1223:16 In global bam is  yay
*/
