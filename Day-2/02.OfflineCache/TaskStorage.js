function getTaskStorage(){
	var storage = window.localStorage;
	return {
		add : function(taskName){
			var id = new Date().getTime().toString();
			storage.setItem(id,taskName);
			return {
				id : id,
				name : taskName
			};
		},
		remove : function(id){
			storage.removeItem(id);
		},
		getAll : function(){
			var tasks = [];
			for(var i=0;i<storage.length;i++){
				var id = storage.key(i);
				var taskName = storage.getItem(id);
				var task = {
					id : id,
					name : taskName
				};
				tasks.push(task);
			}
			return tasks;
		}
	}
}