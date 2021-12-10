function renderCheckout(props) {
    const ul = document.createElement('ul')
    props.forEach(item => {
        const template = `
        <li data-key=${item.id}>${item.quantity}</li>
        `
        const element = document.createRange().createContextualFragment(template).children[0]
        ul.append(element)
    })
    return ul
}
export { renderCheckout }