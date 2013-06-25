var blink = false,
    glow = false,
    changeColor = false,
    changeShape = false;

var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // initialize the dancer position on the page
  this.setPosition(top, left);
};

Dancer.prototype.step = function(flag){
      var that = this;
      flag = flag? false : true;
      setTimeout(function(){that.step(flag);}, that.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.wander = function (){
  this.$node.addClass("wander");
};

Dancer.prototype.bounce = function (){
  this.$node.addClass("bounce");
};

Dancer.prototype.slide = function(){
  this.$node.addClass("slide");
}

// ---------------- Utility Functions Common to All Dancer Types ------------- //
var getRandomSpeed = function (minSpeed, maxSpeed,increment){
  increment = increment || 1;
  minSpeed = minSpeed / increment;
  maxSpeed = maxSpeed / increment;
  return Math.floor(minSpeed + Math.random()*(maxSpeed - minSpeed))*increment;
};

var getRandomColor = function(){
  return Math.floor(Math.random()*16777215).toString(16);
};