// Variable contenant l'adresse de l'api

const kanapi = "http://localhost:3000/api/products";

// Requête HTTP de type GET vers l'api

fetch(kanapi)
    .then(res => {
    return res.json();
})

//this is showing the products
.then((products) => {
    console.log(products);

    for (data of products) {
        console.log(data);
        document.getElementById(
            "items"
        ).innerHTML += `<a href="./product.html?id=${data._id}">
            <article>
                <img
                    src="${data.imageUrl}"
                    alt="${data.altTxt}"/>
                <h3 class="productName">${data.name}</h3>
                <p class="productDescription">${data.description}</p>
                <p class="productDescription">${data.colors}</p>
            </article>
        </a>`}
})


.catch((error) => {alert(error)})

    
/*     .then(data => console.log(data))
    .then(res => {
    if(res.ok){
        console.log('SUCCESS')
    }else{
        console.log('not successful')
    }
}) */