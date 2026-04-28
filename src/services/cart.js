// quais açoes meu carinho pode fazer

//CASOS DE USO

//->adicionar item no carrinho
async function addItem(userCart, item){
   userCart.push(item);
}

//-> calcular o total do carrinho
async function calculateTotal(userCart){
    console.log( userCart.reduce((total, item) => total + item.subtotal(), 0));  
} 

//-> deletar item do carrinho
async function deleteItem(userCart,name){
 
}

//-> remover um item - diminui um item
async function removeItem(userCart,index){}



export{addItem,calculateTotal,deleteItemItem,removeItem};
