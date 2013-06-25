var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.horizontalSpeed = getRandomSpeed(1400, 3000, 200);
  this.$node.addClass("slider");
  this.slide(true);
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.slide = function(flag){
  var that = this;
  if (flag){
    this.$node.animate({left: $("body").width()-15},this.horizontalSpeed,"swing", function(){that.slide(!flag);});
  }else{
    this.$node.animate({left: 0},this.horizontalSpeed,"swing", function(){that.slide(!flag);});
  }
};

