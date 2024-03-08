async function get_stock(){
    console.log(event) // click
    console.log(event.target) // button
    const conn = await fetch("https://paseho.com/stock.php")
    // const data = await conn.text()
    const data = await conn.json() // Convert to array or JSON automatically
    console.log(data)
    data.forEach( company => {
        console.log(company)
        const div_company = `
        <div>
           ${company} 
        </div>
        `
    })
}
