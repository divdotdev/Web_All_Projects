let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let listContainer = document.getElementById("listContainer");
addBtn.addEventListener("click", function() {
    let taskText = itemInput.value;
    if(taskText === "") {
        alert("Please write something first!");
        return;
    }
    let listItem = document.createElement("li");
    listItem.innerText = taskText;
    let removeButton = document.createElement("button");
    removeButton.innerText = "X";
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", function() {
        listItem.remove();
    });
    listItem.appendChild(removeButton);
    listContainer.appendChild(listItem);
    itemInput.value = "";
});