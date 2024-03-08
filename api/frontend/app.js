async function get_data(){
    console.log(event) // click
    console.log(event.target) // button
    const conn = await fetch("https://paseho.com/")
    const data = await conn.text()
    console.log(data)
    document.querySelector("#my_name").innerHTML = data
    document.querySelector("img").src = data
}

async function get_one(){
    const conn = await fetch("https://paseho.com/1.php")
    const data = await conn.text()
    console.log(data)
}

async function get_weather(){
    const conn = await fetch("https://paseho.com/weather.php")
    const data = await conn.text()
    document.querySelector("#weather").innerHTML = data
}