/*var a = document.getElementById("hi");
var b = document.querySelector(".overlay");
var c = document.querySelector(".popoup");
function show(){
    c.style.display = "block";
    b.style.display = "block";
}
function closeup(){
    c.style.display = "none";
    b.style.display = "none";
}
*/
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".pop-box");
var button = document.querySelector(".add-button");

button.addEventListener("click",function(){
    overlay.style.display = "block";
    popup.style.display = "block";
})

var cancel = document.getElementById("cancel");

cancel.addEventListener("click",function (event){
    event.preventDefault();
    overlay.style.display = "none";
       popup.style.display = "none";
}
)

var container = document.querySelector(".container");
var add = document.getElementById("add");
var title = document.getElementById("book-title");
var author = document.getElementById("book-author");
var description = document.getElementById("book-description");

add.addEventListener("click",function(event){

    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<h2>${title.value}</h2><br>
<h4>${author.value}</h4><br>
<p>${description.value}</p><br>
<button onclick="del(event)">delete</button>`
    container.append(div);
    overlay.style.display = "none";
    popup.style.display = "none";

})
function del(event){

    event.target.parentElement.remove();


}
