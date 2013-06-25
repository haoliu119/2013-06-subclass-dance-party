/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    /*
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/

var BounceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  this.step(true);
};
BounceDancer.prototype = Object.create(Dancer.prototype);
BounceDancer.prototype.constructor = BounceDancer;
BounceDancer.prototype.step = function(flag){
  var that = this;
  // var ranDist = Math.random()*800;
  if (flag){
    this.$node.animate({top: $("body").height()},1000,"swing");
  }else{
    this.$node.animate({top: this.top},1000,"swing");
  }
  Dancer.prototype.step.call(this, flag);
  // that.$node.animate({top: this.top-60},500,"linear",function(){
  //   that.$node.animate({top: that.top},500,"linear");
  // });
};

