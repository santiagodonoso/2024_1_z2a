// If the stock quote is between 0 and 4 show red
// If the stock quote is between 5 and 7 show yellow
// If the stock quote is between 7 above show green


async function get_stock(){
    // console.log(event) // click
    // console.log(event.target) // button
    const conn = await fetch("https://paseho.com/stock.php")
    // const data = await conn.text()
    const data = await conn.json() // Convert to array or JSON automatically
    // console.log(data)
    document.querySelector("#companies").innerHTML = ""
    data.forEach( company => {

        let color = "red";

        if(company.quote >= 5 && company.quote <=7){
            color = "yellow"
        }

        if(company.quote > 7){
            color = "green"
        }        

        const div_company = `
        <div class="${color}">
           ${company.name} ${company.quote}
        </div>
        `
        document.querySelector("#companies").insertAdjacentHTML("beforeend", div_company)
    })
}

setInterval( get_stock , 1000  )




