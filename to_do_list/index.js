let input = document.getElementById("todo")
let addButton = document.getElementById("addButton")
let tasks= document.getElementById("listOfTodo")

addButton.addEventListener("click", ()=>{
    let text = document.createElement("p")
    text.innerText = input.value
    text.style.color = "aliceblue"
    tasks.appendChild(text)
    input.value = ""
    text.addEventListener("click", function(){
        text.style.textDecoration = "line-through"
    })
    text.addEventListener("dblclick", ()=>{
        tasks.removeChild(text)
    })
})