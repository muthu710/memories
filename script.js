var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click" ,function(){
    popupoverlay.style.display="block"
    popupbox. style.display="block"
})
var outlinebox=document.querySelector(".outline")
var addmemories=document.getElementById("add-memories")
var dateinput=document.getElementById("add-date-input")
var sweetmemories=document.getElementById("memories-input")

addmemories.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","inside")
    div.innerHTML=`<h3>${dateinput.value}</h3>
    <h4><p>${sweetmemories.value}</p></h4>
    <button onclick="deletebutton(event)" class="deletebutton">delete</button>`
outlinebox.append(div)
popupoverlay.style.display="none"
    popupbox. style.display="none"

})
function deletebutton(event){
    event.target.parentElement.remove()
}