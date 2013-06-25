/* toggle() is a jQuery method to show/hide the <span> tag.
 * See http://api.jquery.com/category/effects/ for this and
 * other effects you can use on a jQuery-wrapped html tag. 
 * blinkyDancer.$node.toggle(); */

var BounceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.verticalSpeed = getRandomSpeed(1200, 2600, 200);
  this.bounce.call(this);
  this.$node.css({'-webkit-animation-duration': this.verticalSpeed+"ms"});
};
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = BounceDancer;