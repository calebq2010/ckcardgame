function Chat(io, id) {
	this.io = io;
	this.allMessages = [];
	this.id = id;
}

Chat.prototype = {
	init: function(socket) {
		socket.join(this.id);
		socket.emit('allMessages', this.allMessages);
		this.listeners(socket);
	},
	listeners: function(socket) {
		socket.on('msg', (msg) => {
			console.log(this.id);
			var message = {id: socket.name, msg: msg};
			this.allMessages.push(message);
			this.io.to(this.id).emit('msg', message);
		})
	}

}

module.exports = Chat;