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


