const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

function login() {
    const inputsData = {
        name: inputs[0].value,
        passwordOne : inputs[1].value
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
            if (data.success) {
                localStorage.setItem('secret', data.secretKey)
                localStorage.setItem('userName', inputsData.name)
            }
            console.log(data)
        })
}

button.onclick = login