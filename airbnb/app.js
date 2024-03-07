let items = [
    {
        "image" : "pictures/1.webp",
        "city" : "Copenhagen",
        "stars" : 5,
        "price" : 100
    }
]


items.forEach( item => {
    const div_item = `
        <div class="item">
            <p>${item}</p>
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