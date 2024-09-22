function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (todoInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = todoInput.value;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
        todoList.removeChild(li);
    };

    // Add the button to the list item
    li.appendChild(removeButton);

    // Add the list item to the to-do list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = "";
}
