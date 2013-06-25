/* toggle() is a jQuery method to show/hide the <span> tag.
 * See http://api.jquery.com/category/effects/ for this and
 * other effects you can use on a jQuery-wrapped html tag. 
 * blinkyDancer.$node.toggle(); */

var BounceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.verticalSpeed = getRandomSpeed(1200, 2600, 200);
  // this.horizontalSpeed = getRandomSpeed(1400, 3000, 200);
  this.$node.addClass("bouncer");
  this.bounce(true);
  // this.slide(true);
};
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = BounceDancer;

BounceDancer.prototype.bounce = function(flag){
  var that = this;
  if (flag){
    this.$node.animate({top: $("body").height()-15},this.verticalSpeed,"swing", function(){that.bounce(!flag);});
  }else{
    this.$node.animate({top: 35},this.verticalSpeed,"swing", function(){that.bounce(!flag);});
  }
  // Dancer.prototype.step.call(this, flag);
};
// BounceDancer.prototype.slide = function(flag){
//   var that = this;
//   if (flag){
//     this.$node.animate({left: $("body").width()-15},this.horizontalSpeed,"swing", function(){that.slide(!flag);});
//   }else{
//     this.$node.animate({left: 0},this.horizontalSpeed,"swing", function(){that.slide(!flag);});
//   }
// };
