var Zerg = function(){

	self = this;	
	self.toString = function() { return "Zerg" };
	
	cwWarrior.call(this, 'zerg');
}

Zerg.prototype = new cwWarrior();