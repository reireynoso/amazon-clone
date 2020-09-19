export const getBasketTotal = (basket) => {
    // reduce iterates through the basket and tallies the total
    // initial amount 1st arg, and item we're iterating over
    return basket?.reduce((amount, item) => (item.price*item.quantity) + amount, 0)
}