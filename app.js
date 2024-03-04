const yellow_light = document.querySelector("#yellow")
const red_light = document.querySelector("#red")
const green_light = document.querySelector("#green")

setTimeout(function(){
    yellow_light.classList.remove("off")
    red_light.classList.add("off")
}, 1000)


setTimeout(function(){
    yellow_light.classList.add("off")
    green_light.classList.remove("off")
}, 2000)











