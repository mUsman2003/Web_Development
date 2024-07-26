console.log("Usman")

let a=document.getElementsByClassName("box")
console.log(a)

document.querySelectorAll(".box").forEach(e=>{e.style.backgroundColor="green"})

a[2].style.backgroundColor="Red"
document.getElementById("abc").style.backgroundColor="Blue"

console.log(document.getElementsByTagName("div"))