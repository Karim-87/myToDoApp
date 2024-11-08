let inputs = document.getElementById("inp") as HTMLInputElement;
let text = document.querySelector(".text") as HTMLElement;

function Add(): void {
    if (inputs.value === "") {
        alert("Please enter a to-do");
    } else {
        // Create a new list item element
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value}`;

        // Create a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            newEle.remove(); // Only remove the specific list item
        });

        // Append delete button to the new element
        newEle.appendChild(deleteBtn);

        // Append new element to the text container
        text.appendChild(newEle);

        // Clear the input field
        inputs.value = "";
    }
}
