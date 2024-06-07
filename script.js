const infoCard = document.querySelector("[info-card]")
const infoCardContainer = document.querySelector("[info-card-container]")
const searchBar = document.querySelector("[data-search]")

let users = [Map]

searchBar.addEventListener("input", (e) =>{
    const value = e.target.value
})

fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => res.json())
.then(data => {
    data.map(user => {   
        const card = infoCard.content.cloneNode(true).children[0]
        const Title = card.querySelector("[data-title]")
        const Brand = card.querySelector("[data-brand]")
        const Description = card.querySelector("[data-description]")
        Title.textContent = user.username
        Brand.textContent = user.company.name
        Description.textContent = user.company.bs
        infoCardContainer.append(card)
       return { name: user.username, brand: user.company.name, description: user.company.bs, element: card}
    })
})