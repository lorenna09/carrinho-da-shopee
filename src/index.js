
import * as cartService from "./services/cart.js";
import createItem from "./services/item";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

//criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item1 = await createItem("hotwheels lamborghini", 39.99, 3);

//adicionei dois itens ao carrinho
await carService.addItem(myCart, item1);
await carService.addItem(myCart, item2);

await carService.removeItem(myCart,item2);
await carService.removeItem(myCart,item2);
await carService.removeItem(myCart,item2);

await carService.displaycart(myCart);
//deletei dois itens do carrinho
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);
await cartService.calcuteTotal(myCart);








