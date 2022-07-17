document.addEventListener("DOMContentLoaded", function () {
  const btnAdd = document.getElementById("add");
  const errorAlert = document.getElementById("error");
  const titleToAdd = document.getElementById("task-title");
  const descToAdd = document.getElementById("task-description");
  let id = 0;

  function addTodo() {
    if (titleToAdd.value === "" || descToAdd.value === "") {
      errorAlert.style.display = "block";
      console.log("Please enter a title and description");
      return;
    } else {
      errorAlert.style.display = "none";
      const todoElement = document.getElementById("todo-list");

      const newTaskParent = document.createElement("li");
      newTaskParent.classList.add("flex", "flex-col");
      newTaskParent.setAttribute("id", `task-${id}`);

      const newTaskTitle = document.createElement("h6");
      newTaskTitle.classList.add("font-medium", "font-md");
      newTaskTitle.setAttribute("id", "taskTitle");
      newTaskTitle.innerHTML = titleToAdd.value.toUpperCase();

      const newTaskDescription = document.createElement("p");
      newTaskDescription.setAttribute("id", "taskDescription");
      newTaskDescription.innerHTML = descToAdd.value;

      const btnEdit = document.createElement("button");
      btnEdit.classList.add(
        "bg-gray-700",
        "rounded",
        "h-10",
        "w-full",
        "mt-6",
        "text-gray-50"
      );
      btnEdit.setAttribute("id", "editTask");
      btnEdit.innerHTML = "Edit";

      const btnRemove = document.createElement("button");
      btnRemove.classList.add(
        "bg-gray-200",
        "rounded",
        "h-10",
        "w-full",
        "mt-1",
        "text-gray-900"
      );
      btnRemove.setAttribute("id", "deleteTask");
      btnRemove.innerHTML = "Delete";

      newTaskParent.appendChild(newTaskTitle);
      newTaskParent.appendChild(newTaskDescription);
      newTaskParent.appendChild(btnEdit);
      newTaskParent.appendChild(btnRemove);

      todoElement.appendChild(newTaskParent);
      id++;
      btnRemove.onclick = function (e) {
        removeTodo(e.target.parentElement.id);
      };
      console.log(id);
      return;
    }
  }

  function removeTodo(id) {
    document.getElementById(id).remove();
  }

  btnAdd.onclick = addTodo;
});
