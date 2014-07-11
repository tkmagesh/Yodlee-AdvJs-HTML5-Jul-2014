var products = [
	{id :8, name:"pen", cost :70, units :40, category:2},
	{id :4, name:"ten", cost :20, units :50, category:1},
	{id :3, name:"len", cost :30, units :20, category:2},
	{id :9, name:"den", cost :60, units :90, category:1},
	{id :2, name:"ken", cost :80, units :60, category:2},
	{id :7, name:"zen", cost :10, units :70, category:1}
]
console.log("Initial list");
console.table(products);

var sort = function(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		
}

console.log("After sorting");
sort(products);
console.table(products);

var sort = function(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		
}
var compareProductByCost = function(p1,p2){
	if (p1.cost > p2.cost) return 1;
	if (p1.cost === p2.cost) return 0;
	return -1;
}

console.log("After sorting by cost")
sort(products,compareProductByCost);
console.table(products);

var sort = function(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		
}

console.log("After sorting by units")
sort(products, "units");
console.table(products);

function filter(list, criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i]))
			result.push(list[i]);
	return result;
}

var costlyProductCriteria = function(p){
	return p.cost> 50;
}

console.log("All costly products");
var costlyProducts = filter(products,costlyProductCriteria);
console.table(costlyProducts);

var groupBy = function(list,attrName){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = list[i][attrName];
		if (typeof result[key] === "undefined")
			result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}
console.table("Group by category")
var productsByCategory = groupBy(products,"category");
console.table(productsByCategory[1]);
console.table(productsByCategory[2]);

var groupBy = function(list,keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		if (typeof result[key] === "undefined")
			result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

var keySelectorByCost = function(p){
	return p.cost > 50 ? "costly" : "affordable";
}
console.log("Group by Cost");
var productsByCost = groupBy(products,keySelectorByCost);
console.table(productsByCost["affordable"]);
console.table(productsByCost["costly"]);