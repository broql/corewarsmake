var Square = function(x, y, axe, direction) {
  
	self = this;
	
	self.x = 0;
	self.y = 0;
  self.axe = 'x';
  self.direction = '-';
	self.toString = function() { return "Square" };
}

Square.prototype.draw = function(color) {

	Scene.CONTEXT.fillStyle = color || '#fff';		
	Scene.CONTEXT.fillRect(this.x, this.y, Scene.SQUARE_SIZE, Scene.SQUARE_SIZE);
}

Square.prototype.generate = function() {
	this.x = Math.floor(Scene.ELEMENT_ATTRS['width']/Scene.SQUARE_SIZE*Math.random())*Scene.SQUARE_SIZE;
	this.y = Math.floor(Scene.ELEMENT_ATTRS['height']/Scene.SQUARE_SIZE*Math.random())*Scene.SQUARE_SIZE;
	
	if(this.checkCoord() === true) {
		this.generate();
	}
	else {		
		Scene.ELEMENT_COORDS[this.x+'x'+this.y];
		return this;
	}
}

Square.prototype.checkCoord = function() {
	return (Scene.ELEMENT_COORDS[this.x+'x'+this.y] !== undefined);
}
