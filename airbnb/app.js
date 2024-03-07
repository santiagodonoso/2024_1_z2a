const div_items = document.querySelector("#items")
const items = ["one", "two"]

items.forEach( item => {
    const div_item = `
        <div class="item">
            <p>${item}</p>
        </div>
    `
    div_items.insertAdjacentHTML("beforeend", div_item)
})


