let hrs = document.querySelector(".hrs")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")


setInterval(()=>{
    let getTime = new Date()

    hrs.innerHTML = (getTime.getHours()<10?"0":"") + getTime.getHours();
    min.innerHTML = (getTime.getMinutes()<10?"0":"") + getTime.getMinutes();
    sec.innerHTML = (getTime.getSeconds()<10?"0":"") + getTime.getSeconds();
},1000)

