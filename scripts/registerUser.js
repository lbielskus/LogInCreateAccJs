const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

function register() {
    const inputsData = {
        name: inputs[0].value,
        passwordOne : inputs[1].value,
        passwordTwo : inputs[2].value
    }
    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(inputsData)
    }
    fetch('http://167.99.138.67:1111/createaccount', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

button.onclick = register


















// create new post (have to have secret key)
// http://167.99.138.67:1111/createpost
// send object JSON object with these keys:
// secretKey, title, image, description

// update existing post (have to have secret key)
// http://167.99.138.67:1111/updatepost
// send JSON object with these keys:
// secretKey, title, image, description, id (id stands for post id)

// delete existing post (have to have secret key)
// http://167.99.138.67:1111/deletepost
// send JSON object with these keys:
// secretKey, id (id stands for post id)




// create new user
// http://167.99.138.67:1111/createaccount
// send JSON object with these keys:
// name, passwordOne, passwordTwo

// login to get your secret key
// http://167.99.138.67:1111/login
// send JSON object with these keys:
// name, password