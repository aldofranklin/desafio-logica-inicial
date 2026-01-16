let invoice ={
        name: "Felipe",
        age: 28,
        products:{
            0:["mouse 2xwm", 29.90],
            1:["teclado mecanico", 129.90],
            2:["monitor", 899.99]
        },
        taxes: 98.90
}

generateInvoice(invoice)


function generateInvoice(invoice) {
    console.log(`o nome é: ${invoice.name}`)
    console.log(`a idade é ${invoice.age}`)
    console.log("--------------------------")

    for(let index in invoice.products){
        let[productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }

    
}