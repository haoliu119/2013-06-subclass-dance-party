var WanderDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.horizontalSpeed = getRandomSpeed(2000, 6000, 200);
  this.verticalSpeed = getRandomSpeed(2000, 4000, 200);
  this.wander.call(this);
  this.$node.css({'-webkit-animation-duration':this.verticalSpeed+"ms,"+this.horizontalSpeed+"ms"});
};
WanderDancer.prototype = Object.create(Dancer.prototype);
WanderDancer.prototype.constructor = SlideDancer;