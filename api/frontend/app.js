async function get_data(){
    console.log(event) // click
    console.log(event.target) // button
    const conn = await fetch("https://paseho.com/")
    const data = await conn.text()
    console.log(data)
    document.querySelector("#my_name").innerHTML = data
}