
(function(){
	var taskStorage = getTaskStorage();
	window.addEventListener("DOMContentLoaded",init);
	function init(){
		document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompletedClick);
		var tasks = taskStorage.getAll();
		for(var i=0;i<tasks.length;i++)
			addTaskToUI(tasks[i]);

	}
	function onBtnAddTaskClick(){
		var taskName = document.getElementById("txtTask").value;
		var newTask = taskStorage.add(taskName);
		addTaskToUI(newTask);
		
	}
	function addTaskToUI(task){
		var newTaskLi = document.createElement("li");
		newTaskLi.innerHTML = task.name;
		newTaskLi.setAttribute("task-id", task.id);
		newTaskLi.addEventListener("click", onTaskItemClick);
		document.getElementById("ulTaskList").appendChild(newTaskLi);
	}

	function onTaskItemClick(){
		this.classList.toggle("completed");
	}
	function onBtnRemoveCompletedClick(){
		var tasks = document.getElementById("ulTaskList").children;
		for(var i=tasks.length-1;i>=0;i--)
			if (tasks[i].classList.contains("completed")){
				taskStorage.remove(tasks[i].getAttribute("task-id"))
				tasks[i].remove();
			}

	}
})();
