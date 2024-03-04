const yellow_light = document.querySelector("#yellow")
const red_light = document.querySelector("#red")
const green_light = document.querySelector("#green")

setTimeout(function(){
    yellow_light.classList.remove("off")
    red_light.classList.add("off")
}, 5000)


setTimeout(function(){
    yellow_light.classList.add("off")
    green_light.classList.remove("off")
}, 10000)











