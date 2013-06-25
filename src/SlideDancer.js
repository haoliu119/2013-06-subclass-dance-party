var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.horizontalSpeed = getRandomSpeed(3000, 6000, 200);
  this.slide.call(this);
  this.$node.css({'-webkit-animation-duration': this.horizontalSpeed+"ms"});
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;