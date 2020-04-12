var bar = 'bar';

function foo(str){
  eval(str); //cheating
  console.log(bar); //should give bar but produces 42;
}
foo('var bar = 42;');
