
import { dataFetcher } from "./dataFetcher.js";
import { getCheckoutItems } from './getCheckoutItems.js'
import {renderCheckout} from './templates/renderCheckout.js'
async function checkout() {
    const cartItems = await dataFetcher('data/cart.json')
    const checkoutItems = getCheckoutItems(cartItems)
    const checkoutComponent = renderCheckout(checkoutItems)
    document.querySelector('main').append(checkoutComponent)
}

checkout()