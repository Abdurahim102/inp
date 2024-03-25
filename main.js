
// BUTTONS
const All = document.getElementById("All")
const Sam = document.getElementById("sam")
const red = document.getElementById("red")
const iph = document.getElementById("iph")



const Sam1 = document.getElementById("sam1")
const red1 = document.getElementById("red1")
const iph1 = document.getElementById("iph1")

const Sam2 = document.getElementById("sam2")
const red2 = document.getElementById("red2")
const iph2 = document.getElementById("iph2")



const inp = document.querySelector('.input')


function Adder() {
    All.style.color = "white"
    All.style.background = "rgb(28, 105, 219)"

    Sam.style.color = "black"
    Sam.style.background = "white"
    red.style.color = "black"
    red.style.background = "white"
    iph.style.color = "black"
    iph.style.background = "white"

    Sam1.style.display = "flex"
    Sam2.style.display = "flex"
    red2.style.display = "flex"
    red1.style.display = "flex"
    iph1.style.display = "flex"
    iph2.style.display = "flex"




   
}
function Adder2() {
    Sam.style.color = "white"
    Sam.style.background = "rgb(28, 105, 219)"

    red.style.color = "black"
    red.style.background = "white"
    All.style.color = "black"
    All.style.background = "white"
    iph.style.color = "black"
    iph.style.background = "white"

    Sam1.style.display = "flex"
    Sam2.style.display = "flex"


    red1.style.display = "none"
    iph1.style.display = "none"
    red2.style.display = "none"
    iph2.style.display = "none"
    

}

function Adder3() {
    red.style.color = "white"
    red.style.background = "rgb(28, 105, 219)"

    Sam.style.color = "black"
    Sam.style.background = "white"
    All.style.color = "black"
    All.style.background = "white"
    iph.style.color = "black"
    iph.style.background = "white"



    red2.style.display = "flex"
    red1.style.display = "flex"

    Sam1.style.display = "none"
    iph1.style.display = "none"
    Sam2.style.display = "none"
    iph2.style.display = "none"
    
}

function Adder4() {
    iph.style.color = "white"
    iph.style.background = "rgb(28, 105, 219)"
    Sam.style.color = "black"
    Sam.style.background = "white"
    All.style.color = "black"
    All.style.background = "white"
    red.style.color = "black"
    red.style.background = "white"


    iph1.style.display = "flex"
    iph2.style.display = "flex"

    Sam1.style.display = "none"
    red1.style.display = "none"
    Sam2.style.display = "none"
    red2.style.display = "none"

}
function Changer() {
   if (inp.value == "iph") {
    iph1.style.display = "flex"
    iph2.style.display = "flex"

    Sam1.style.display = "none"
    red1.style.display = "none"
    Sam2.style.display = "none"
    red2.style.display = "none"
   }else if(inp.value == "sam"){
    Sam1.style.display = "flex"
    Sam2.style.display = "flex"
    red1.style.display = "none"
    iph1.style.display = "none"
    red2.style.display = "none"
    iph2.style.display = "none"
}else if (inp.value == "red"){
    red2.style.display = "flex"
    red1.style.display = "flex"

    Sam1.style.display = "none"
    iph1.style.display = "none"
    Sam2.style.display = "none"
    iph2.style.display = "none"
}else if (inp.value == "r"){
    red2.style.display = "flex"
    red1.style.display = "flex"

    Sam1.style.display = "none"
    iph1.style.display = "none"
    Sam2.style.display = "none"
    iph2.style.display = "none"
}
else if (inp.value == "re"){
    red2.style.display = "flex"
    red1.style.display = "flex"

    Sam1.style.display = "none"
    iph1.style.display = "none"
    Sam2.style.display = "none"
    iph2.style.display = "none"
}
   else if (inp.value == "i") {
    iph1.style.display = "flex"
    iph2.style.display = "flex"

    Sam1.style.display = "none"
    red1.style.display = "none"
    Sam2.style.display = "none"
    red2.style.display = "none"
}
else if (inp.value == "ip") {
    iph1.style.display = "flex"
    iph2.style.display = "flex"

    Sam1.style.display = "none"
    red1.style.display = "none"
    Sam2.style.display = "none"
    red2.style.display = "none"
}
else if(inp.value == "s"){
    Sam1.style.display = "flex"
    Sam2.style.display = "flex"
    red1.style.display = "none"
    iph1.style.display = "none"
    red2.style.display = "none"
    iph2.style.display = "none"
}
else if(inp.value == "sa"){
    Sam1.style.display = "flex"
    Sam2.style.display = "flex"
    red1.style.display = "none"
    iph1.style.display = "none"
    red2.style.display = "none"
    iph2.style.display = "none"
}else{
    Sam1.style.display = "flex"
    Sam2.style.display = "flex"
    red2.style.display = "flex"
    red1.style.display = "flex"
    iph1.style.display = "flex"
    iph2.style.display = "flex"

}
}