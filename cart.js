const shoppingCart = [
    {name: 'shoe', prize: 1200, quantity: 2},
    {name: 'shoe', prize: 1200, quantity: 2},
    {name: 'shoe', prize: 1200, quantity: 2},
    {name: 'shoe', prize: 1200, quantity: 2},
];

function totalok (products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const product = products[i];
        const ok = product.prize * product.quantity;
        
        sum = sum + ok;
    }
    return sum;
}

const eehi = totalok(shoppingCart);

console.log(eehi);