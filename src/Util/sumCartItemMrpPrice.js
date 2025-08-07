export const sumCartItemMrpPrice = (cartItems) => {
    return cartItems.reduce((acc,item) => acc + item.mrpPrice,0)
}