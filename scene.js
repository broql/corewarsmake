var Scene = {

	CONTEXT: null,
	DELAY: 200,
  ELEMENT: null,
  ELEMENT_ATTRS: {},  
  ELEMENT_COORDS: {},
	INTERVAL_ID: null,
  SQUARE_SIZE: 20,
  WARRIORS: [],
  
  init: function(id) {

    //prepare the stage!
    this.ELEMENT = document.getElementById(id);
    this.CONTEXT = this.ELEMENT.getContext('2d');
    
    //extract obscene attributes
    for(i = 0; i < this.ELEMENT.attributes.length; i++) {
      this.ELEMENT_ATTRS[this.ELEMENT.attributes[i].name] = this.ELEMENT.attributes[i].value;
    }
		
		this.WARRIORS[0] = new Zerg();
		
    this.start();
  },
  
  start: function(){
		
    this.INTERVAL_ID = setInterval(this.render, this.DELAY);
  },
  
  pause: function(){
    clearInterval(this.INTERVAL_ID);
  },
  
  changeSpeed: function(delay){
    this.DELAY = delay;
    this.pause();
    this.start();
  },
  
  gameOver: function() {
    this.pause();
		//message
  },
  
  render: function(){
		
		//Scene.WARRIORS[0].draw();
		//Scene.WARRIORS[0].move(1,0);
  }
};