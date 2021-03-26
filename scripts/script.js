const enterButton = document.getElementById("enter");
const input = document.getElementById("userItems");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //Reset text input field

    // Done items
    function doneItem() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", doneItem);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteItem);

    function deleteItem() {
        li.classList.add('delete'); // Display none
    }
}

function addListClick() { // Create a list clicking in the button
    if (inputLength() > 0 && inputLength() <= 43) { // Empty input doesn't create a li and the max length is 43
        createListElement();
    } else {
        alert(`É necessário colocar alguma coisa para poder criar as tarefas ou possuir menos de 43 caracteres`)
    }
}

function addListKeypress(event) { // Create a list pressing the enter key
    if (inputLength() > 0 && inputLength() <= 43 && event.keyCode === 13) { // 13 is the enter keycode
        createListElement();
    }
}

enterButton.addEventListener('click', addListClick);
input.addEventListener('keypress', addListKeypress);