var list = document.getElementById("list");
function addTask() {
    var taskInput = document.getElementById("task");
    var task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task");
        return;
    }
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerText = task;
    span.onclick = function () {
        li.classList.toggle("done");
    };
    var delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
}
document.getElementById("task").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
