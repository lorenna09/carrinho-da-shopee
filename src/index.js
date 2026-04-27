import createItem from "./services/item";

const cart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item1 = await createItem("hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal());






item.js
// CASOS DE USO DOS ITENS


//-> criar item com subtotal certo
async function  createItem(name, price,quantity) {
 return{
    name,
    price,
    quantity,
    subtotal:() => price * quantity,
 };  
}

export default createItem;
