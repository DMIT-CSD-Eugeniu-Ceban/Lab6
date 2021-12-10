
(function () {
    // Check to see of a product has been clicked
    // return the user to the storefront page
    if (!localStorage.getItem('product')) {
        window.location.assign('index.html')
    }
    // Data from the storefront
    const product = JSON.parse(localStorage.getItem('product'))
    const cartItems = JSON.parse(localStorage.getItem('cart'))

    // Update the cart count
    updateCart()

    // render the page template
    const markup = renderProductPage(product)
    // add the page template
    document.querySelector('main').append(markup)

    // Update the cart Count
    function updateCart() {
        // const cartItems = JSON.parse(localStorage.getItem('cart'))
        document.querySelector('#cartCount').textContent = cartItems.length
    }



    function renderProductPage(product) {
        const { id, name, price, sizes, long, meta, productShots } = product
        // Product render
        const template = `
        <section class="product">
            <ul class="shots">
                <li class="shot"><img src="./assets/shoes/${name.toLowerCase()}/${productShots[0]}" alt="${name}"></li>
                <li class="shot"><img src="./assets/shoes/${name.toLowerCase()}/${productShots[1]}" alt="${name}"></li>
                <li class="shot"><img src="./assets/shoes/${name.toLowerCase()}/${productShots[3]}" alt="${name}"></li>
                <li class="shot"><img src="./assets/shoes/${name.toLowerCase()}/${productShots[4]}" alt="${name}"></li>
            </ul>

                <!-- Container queries -->
            <div class="details">
                <header>
                    <h2 class="title">${name}</h2>
                    <p class="price">$${price / 100}</p>
                </header>

                ${sizeFormatter(sizes)}
                <div class="quantity">quantity</div>

                <ul class="controls">
                    <li><button id="addToCart" data-key=${id}class="add-to-cart">Add To Cart</button></li>
                    <li><button id ="checkout" class="checkout">Checkout</button></li>
                </ul>

                <div class="description">
                    <h3>Description</h3>
                    <p>${long}
                    </p>
                </div>

                <footer>
                    <ul class="meta">
                        <li>likes<span> ${meta.rating}</span></li>
                        <li>views<span> ${meta.views}</span></li>
                        <li>reviews<span> ${meta.reviews}</span></li>
                    </ul>
                </footer>
            </div>
        </section>

        `
        const element = document.createRange().createContextualFragment(template).children[0]
        element.querySelector('#addToCart').addEventListener('click', onAddToCart)
        element.querySelector('#checkout').addEventListener('click', onCheckout)

        return element
    }

    function onCheckout() {
        window.location.assign('checkout.html')
    }



    function onAddToCart(e) {

        const cartObject = {
            id: e.currentTarget.dataset.key,
            quantity:1
        }
        cartItems.push(cartObject)
        localStorage.setItem('cart', JSON.stringify(cartItems))
        updateCart()
    }

   
    // formatting product sizes data
    function sizeFormatter(sizes) {
        let markup = `<ul class="sizes">`
        sizes.forEach(size=>{
            markup += `<li class="size">${size}</li>`
        })

        markup += `</ul>`
        return markup

    }

}
)()