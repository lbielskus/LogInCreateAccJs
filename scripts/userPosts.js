const container = document.querySelector('.container')

function appendPosts(posts) {
    container.innerHTML = ""

    posts.map(post => {
        container.innerHTML = `
            <div class="post" id="${post.id}">
                <img src="${post.image}" alt="">
                <h3>${post.title}</h3>
                <h4>${post.description}</h4>
                <button>Edit</button>
                <button>Delete</button>
            </div>`
    })
}

(() => {
    const username = localStorage.getItem('userName')
    fetch(`http://167.99.138.67:1111/getuserposts/${username}`)
        .then(res => res.json())
        .then(answer => {

            appendPosts(answer.data)
            console.log(data)
        })
})()