var webSocket = require("nodejs-websocket");
var server = webSocket.createServer(function(con){
	console.log("a new connection is established");
	con.on("text", function(msg){
		server.connections.forEach(function(c){
			c.sendText(msg);
		});
	});
});
server.listen(9090);
console.log("Socket server is running on port 9090..!!");