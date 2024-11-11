let card = document.querySelector(".card")
let API = ("https://dummyjson.com/users")

async function getUsers() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);

        card.innerHTML = data.users.map((x) => {
            return`
             <div class="title">
             <h3>${x.firstName}</h3>
             <h3>${x.lastName}</h3>
             <img  src="${x.image}"></img>
             <p>${x.email}</p>
            </div>
            `
        }).join("")
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}

getUsers()