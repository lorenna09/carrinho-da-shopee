
import * as cartService from "./services/cart.js";
import createItem from "./services/item";

const cart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item1 = await createItem("hotwheels lamborghini", 39.99, 3);

//adicionei dois itens ao carrinho
await carService.addItem(myCart, item1);
await carService.addItem(myCart, item2);

//deletei dois itens do carrinho
await cartService.deleteItem(myCart, item2.name);
await cartService.deleteItem(myCart, item1.name);


console.log("Shopee Cart TOTAL IS:");
await cartService.calcuteTotal(myCart);








