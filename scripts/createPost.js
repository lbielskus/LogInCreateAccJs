const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

function create() {
    const inputsData = {
        title: inputs[0].value,
        image: inputs[1].value,
        description: inputs[2].value,
        secretKey: localStorage.getItem('secret')
    }
    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(inputsData)
    }
    fetch('http://167.99.138.67:1111/createpost', options)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('secret', data.secretKey)
            }
            console.log(data)
        })
}

button.onclick = create