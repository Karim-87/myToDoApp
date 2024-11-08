var inputs = document.getElementById("inp");
var text = document.querySelector(".text");
function Add() {
    if (inputs.value === "") {
        alert("Please enter a to-do");
    }
    else {
        // Create a new list item element
        var newEle_1 = document.createElement("li");
        newEle_1.innerHTML = "".concat(inputs.value);
        // Create a delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            newEle_1.remove();   // Only remove the specific list item
        });
        // Append delete button to the new element
        newEle_1.appendChild(deleteBtn);
        // Append new element to the text container
        text.appendChild(newEle_1);
        // Clear the input field
        inputs.value = "";
    }
}
