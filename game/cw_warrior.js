var cwWarrior = function(name) {	
	var self = this;
	self.name = name;
	self.body = new Square().generate();
}

cwWarrior.prototype.move = function(x, y) {
	this.body.x = (x && x < 2 && x > -2) ? this.body.x + x : this.body.x;
	this.body.y = (y && y < 2 && y > -2) ? this.body.y + y : this.body.y;;
}

cwWarrior.prototype.draw = function() {
	this.body.draw();
}