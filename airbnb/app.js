const div_items = document.querySelector("#items")

let items = [
    {
        "image" : "pictures/1.webp",
        "city" : "Copenhagen",
        "stars" : 1,
        "price" : 100
    },
    {
        "image" : "pictures/2.webp",
        "city" : "Køge",
        "stars" : 2,
        "price" : 200
    }, 
    {
        "image" : "pictures/3.webp",
        "city" : "Miami",
        "stars" : 3,
        "price" : 300
    },  
    {
        "image" : "pictures/4.webp",
        "city" : "Barcelona",
        "stars" : 4,
        "price" : 400
    },  
    {
        "image" : "pictures/5.webp",
        "city" : "Berlin",
        "stars" : 5,
        "price" : 500
    },                 
]


items.forEach( item => {
    let price = item.price
    let test_class = "normal"
    if( price < 300 ){
        console.log("cheap")
        test_class = "cheap"
    }else{
        console.log("normal")
    }
    const div_item = `
    <div class="item">
        <img src="${item.image}">
        <div>
            <p>${item.city}</p>
            <p>${item.stars} ⭐</p>
        </div>
        <div class="${test_class}">
            ${item.price} dkk. per night
        </div>
    </div>
    `
    div_items.insertAdjacentHTML("afterbegin", div_item)
})







// Exercise:
// Create a JSON object showing data about you.
// Give a varaiable name to the object "person"
// Show in the key values:
// name, last name, age, city where you live

/*
let person = {
    "name" : "A",
    "last_name" : "B",
    "age" : 10,
    "city" : "Køge",
}
*/



/*
// Object or JSON object
// key : value pairs
let item_one = {
    "country" : "Denmark",
    "image" : "1.png",
    "price" : 10
}

console.log(item_one.country)
console.log(item_one.price)

item_one.city = "Copenhagen"

console.log(item_one)


item_one.price = 20

console.log(item_one)
*/


/*
const div_items = document.querySelector("#items")
// index         0      1       2        3       4
// array defined by []
const items = ["one", "two", "three", "four", "five"]

// index of the array
console.log(items[4])


items.forEach( item => {
    const div_item = `
        <div class="item">
            <p>${item}</p>
        </div>
    `
    div_items.insertAdjacentHTML("afterbegin", div_item)
})

// beforeend afterend beforebegin afterbegin ````
*/