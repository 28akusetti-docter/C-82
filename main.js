var m_event= "empty";
var last_X, last_Y;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="black"
l_width= 3
canvas.addEventListener("mousedown",my_md)
function my_md(e){
    color=document.getElementById("color").value
    l_width=document.getElementById("Lwidth").value
    m_event="mouseDown"
}
canvas.addEventListener("mousemove",my_mm)
function my_mm(e){
    currentmouse_X=e.clientX-canvas.offsetLeft
    currentmouse_Y=e.clientY-canvas.offsetTop
    if(m_event == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=l_width
        ctx.moveTo(last_X, last_Y)
        ctx.lineTo(currentmouse_X, currentmouse_Y)
        ctx.stroke()
    }
    last_X=currentmouse_X
    last_Y=currentmouse_Y
}
canvas.addEventListener("mouseup",my_mu)
function my_mu(e){
    m_event="mouseUp"
}
canvas.addEventListener("mouseleave",my_ml)
function my_ml(e){
    m_event="mouseLeave"
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}