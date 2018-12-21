import {productId as Id , productName} from './module1.js';
console.log("From Base");
//Id =500; //error Id is read only
console.log(`The product id ${Id} and the product name is ${productName}`);
import {products} from './module1.js';
console.log(products.id);
products.id = 222;
console.log("In base.js",products.id);
import {showId} from './module1.js';
showId(); 