async function get_data(){
    console.log(event) // click
    console.log(event.target) // button
    const conn = await fetch("https://paseho.com/stock.php")
    const data = await conn.text()
    console.log(data)
}
