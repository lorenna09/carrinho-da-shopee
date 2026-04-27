// quais açoes meu carinho pode fazer

//CASOS DE USO

//->adicionar item no carrinho
async function addItem(userCart, item){
   userCart.push(item);
}

//-> deletar item do carrinho
async function removeItem(userCart,name){
  return userCart.reduce((total, item) => total + item.subtotal(), 0);  
}

//-> remover um item - diminui um item
async function removeItem(userCart,index){}

//-> calcular o total do carrinho
async function calculateTotal(userCart){} 

export{
addIte,
calculateTotal,
removeItem,
removeItem,
}
