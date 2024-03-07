const yellow_light = document.querySelector("#yellow")
const red_light = document.querySelector("#red")
const green_light = document.querySelector("#green")

function step_one(){
   red_light.classList.remove("off")
   yellow_light.classList.add("off")
   green_light.classList.add("off")
   setTimeout( step_two, 1000 )
}
function step_two(){
   red_light.classList.remove("off")
   yellow_light.classList.remove("off")
   green_light.classList.add("off")
   setTimeout( step_three, 1000 )
}
function step_three(){
   red_light.classList.add("off")
   yellow_light.classList.add("off")
   green_light.classList.remove("off")
   setTimeout( step_four, 1000 )
}
function step_four(){
   red_light.classList.add("off")
   yellow_light.classList.remove("off")
   green_light.classList.add("off")
   setTimeout( step_four, 1000 )
}

step_one()














