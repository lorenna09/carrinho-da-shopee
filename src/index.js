
import * as cartService from "./services/cart.js";
import createItem from "./services/item";

const cart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item1 = await createItem("hotwheels lamborghini", 39.99, 3);

await carService.addItem(myCart, item1);
await carService.addItem(myWhishList, item2);

await cartService.deleteItem(myCart, item2);

console.log("Shopee Cart TOTAL IS:");
await cartService.calcuteTotal(myCart);








