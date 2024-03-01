function show_full_name(){
   
    let name = document.querySelector("#user_name").value
    let last_name = document.querySelector("#last_name").value
    let full_name = name + " " + last_name
    console.log(full_name)
    document.querySelector("div").innerHTML = full_name

}




/*
// let is a variable that can be changed
let name = "xxxxxx"
name = "Santiago" 
let last_name = "Donoso"

let full_name = name + " " + last_name

console.log(full_name)

// document.querySelector("div")
*/








