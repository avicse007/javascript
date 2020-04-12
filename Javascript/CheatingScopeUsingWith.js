var obj = {a: 10,
           b : 20};
           
with(obj){
a=a*10;
b=b*10;
c=10;  //This will as with scope that is obj that do you have c declared. It will say go Fish!!
//Then it will ask next higher scope that is global here and it will sany on i don't have c ,but have created c for you.
}

console.log(obj.c);// undefined;
console.log(c); //10

// But here the intension is to create a property c ins obj . But with have created it to global. 
