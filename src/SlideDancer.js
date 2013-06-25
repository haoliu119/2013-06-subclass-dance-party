var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.horizontalSpeed = getRandomSpeed(1400, 3000, 200);
  this.$node.addClass("slider");
  this.slide(true);
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;