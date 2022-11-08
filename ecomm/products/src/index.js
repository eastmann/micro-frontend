import faker from 'faker'

const parent = document.getElementById('dev-products')

let products = ''

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    products += `<div>${i+1}. ${name}</div>`

    parent.innerHTML = products
}

// console.log(products)
