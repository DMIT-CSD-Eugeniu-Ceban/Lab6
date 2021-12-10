
(function () {
    // Global data Store Index, Checkout
    let store;
    /* const cartItems = [{ id: 1, quantity: 0 }]
    document.querySelector('#cartCount').textContent = cartItems.length
    localStorage.setItem("cart", JSON.stringify(cartItems)) */

    if (!localStorage.getItem('cart')) {
        // const temp = []
        localStorage.setItem('cart', JSON.stringify([]))
    } 
    const cartCount = JSON.parse(localStorage.getItem('cart'))
    document.querySelector('#cartCount').textContent = cartCount.length;
    
    // fetch data
    fetch('./data/shoes.json')
        .then(res => res.json())
        .then(data => {
            store = [...data]
            const productElements = renderProducts(data)
            const products = addProductControlls(productElements)
            const main = document.createElement('main')

            products.forEach(product => {
                // layout trashing
                main.append(product)
            })
            document.querySelector('header').appendChild(main)
        })


    function renderProducts(products) {
        const elements = products.map((product) => {

            const { id, name, thumbnail, price } = product
            const template = `
                <aside class="product" data-key="${id}">
                    <div class="image">
                        <img src="assets/shoes/${name.toLowerCase()}/${thumbnail}" alt="${name} shoes by jim hortons "/>
                    </div>

                    <header class="name">
                        <h2>${name}</h2>
                    </header>
                    
                    <p class="price">$${price / 100}</p>
                </aside>
                `
            return document.createRange().createContextualFragment(template).children[0]
        })
        return elements
    }



    // click event listener Product
    function onViewProductDetails(e) {
        //  id of an item that is clicked
        const key = Number(e.currentTarget.dataset.key)
        const productData = store.find(product => product.id === key)
        // set local storage
        localStorage.setItem("product",JSON.stringify(productData))
        // location navigate to the product page
        window.location.assign('product.html')
    }




    function addProductControlls(products) {
        const elements = products.map(product => {
            product.addEventListener('click', onViewProductDetails)
            return product   
        })
        return elements
    }


}
)()

