function getCheckoutItems(cartItems=[]) {
    const itemIds = cartItems.map(item => item.id)
    const keys = [...new Set(itemIds)]

    const checkoutItems = keys.reduce((checkout, key) => {
        const items = cartItems.filter((cartItem) => cartItem.id === key)

        const quantity = items.reduce((sum, item) => {
            sum += item.quantity
            return sum
        }, 0)

        const checkoutObject = { id: key, quantity }
        checkout.push(checkoutObject)
        return checkout
    }, [])
    return checkoutItems
}

export {getCheckoutItems}