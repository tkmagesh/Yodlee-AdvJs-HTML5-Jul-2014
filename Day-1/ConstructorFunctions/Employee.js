function Employee(id, name, salary){
  if (this.constructor !== arguments.callee)
     return new Employee(id,name,salary);
  this.id = id;
  this.name = name;
  this.salary = salary;
}

/*
Modify the above function to hide the data members and expose accessor functions that will enforce the following constraints

1. id should be readonly
2. name cannot be assigned an empty string
3. salary cannot be assigned a value less than the current salary
*/

function Employee(id, name, salary){
  var _id = id,
      _name = name,
      _salary = salary;

  if (this.constructor !== arguments.callee)
     return new Employee(id,name,salary);
  
  this.id = function(){
  	return _id;
  };
  this.name = function(val){
    if (typeof val === "undefined") return _name;
    if (val !== "") _name = val;
  };
  this.salary = function(val){
    if (typeof val === "undefined") return _salary;
    if (val > _salary) _salary = val;
  }
}