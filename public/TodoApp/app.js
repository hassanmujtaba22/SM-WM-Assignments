let list = document.querySelector(".list");
let todoItem = document.querySelector(".todoItem")

function addItem() {
    
    // create li tag in ul 
    let li = document.createElement("li")
    let liTest = document.createTextNode(todoItem.value)
    li.appendChild(liTest)

    // create delete button in li 
    let deleteBtn = document.createElement("button")
    let deleteBtnText = document.createTextNode("Delete")
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute("class", "deleteBtn")
    deleteBtn.setAttribute("onclick", "deleteBtn(this)")
    li.appendChild(deleteBtn)

    // create edit button in li 
    let editBtn = document.createElement("button")
    let editBtnText = document.createTextNode("Edit")
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute("class", "editBtn")
    editBtn.setAttribute("onclick", "editBtn(this)")
    li.appendChild(editBtn)

    list.appendChild(li)
    todoItem.value = ""
}

function deleteAll() {
    list.innerHTML = ""
}

function deleteBtn(e) {
    e.parentNode.remove()
}

function editBtn(e) {
    let val = e.parentNode.firstChild.nodeValue
    let editValue = prompt("Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue
}