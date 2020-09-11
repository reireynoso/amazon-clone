export const getBasketTotal = (basket) => {
    // let total = 0;
    // for(let i = 0; i < basket.length; i++){
    //     total += basket[i].price
    // }
    // return total

    // reduce iterates through the basket and tallies the total
    // initial amount 1st arg, and item we're iterating over
    return basket?.reduce((amount, item) => item.price + amount, 0)
}