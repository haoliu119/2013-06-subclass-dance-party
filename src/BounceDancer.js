/* toggle() is a jQuery method to show/hide the <span> tag.
 * See http://api.jquery.com/category/effects/ for this and
 * other effects you can use on a jQuery-wrapped html tag. 
 * blinkyDancer.$node.toggle(); */

var BounceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.verticalSpeed = getRandomSpeed(1200, 2600, 200);
  // this.horizontalSpeed = getRandomSpeed(1400, 3000, 200);
  this.$node.addClass("bouncer");
  this.bounce.call(this,true);
  // this.slide(true);
};
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = BounceDancer;