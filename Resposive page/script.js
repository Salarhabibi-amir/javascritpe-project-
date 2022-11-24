(function() {
    const customerImage = document.querySelector('#customer-imag')
    const customerName = document.querySelector('#customer-name')
    const customertext = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(image, name, text) {
        this.image = image
        this.name = name
        this.text = text
    }

    function createCustomer(image, name, text) {
        let img = `.-0/img/${image}.jpg`
        let customers = new Customer(image, name, text)
        alert(typeof(custom));
        customers.push(custom);


    }
    createCustomer(1, 'Amir', 'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.')
    createCustomer(2, 'Jamshid', 'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.')
    createCustomer(3, 'Ahmad', 'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.')
    createCustomer(4, 'Hussain', 'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.')

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('prvBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].image;
                customerName.textContent = customers[index].name;
                customertext.textContent = customers[index].text;
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === custom.length) {
                    index = 0
                }

                customerImage.src = customers[index].image
                customerName.textContent = customers[index].name
                customertext.textContent = customers[index].text
            }
        })
    })
})()