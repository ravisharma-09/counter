const plus = document.querySelector("#plus") ;
const minus = document.querySelector("#minus") ;
const reset = document.querySelector("#reset") ;
const two = document.querySelector("#twomultiply") ;
const bytwo = document.querySelector("#bytwo") ;
const three = document.querySelector("#threemultiply") ;
const display = document.querySelector("#counter") ;
let a = 0 ;
plus.addEventListener("click",() =>{
    a++
    display.innerText = a ;
})
minus.addEventListener("click",()=>{
    a--
    display.innerText = a ;
})
two.addEventListener("click",() =>{
    a =a*2
    display.innerText = a ;
})
bytwo.addEventListener("click",()=>{
    a =a/2
    display.innerText = a ;
})
three.addEventListener("click",() =>{
    a = a*3
    display.innerText = a ;
})
reset.addEventListener("click",()=>{
    a = 0
    display.innerText = a;
})