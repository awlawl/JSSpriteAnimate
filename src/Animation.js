function Animation(imageSource, frameSize, durationMS, frameCount, finishedLoaded) {
  this.image=new Image();
  this.image.onload = function () {
	//alert("hi");
	finishedLoaded();
    //animation.drawFrame(0,{X:0,Y:0},context);            
  };
  this.image.src = imageSource;
  this.frameSize = {X: frameSize.X, Y: frameSize.Y};
  this.durationMS = durationMS;
  this.frameCount = frameCount;
  
  this.drawFrame = function(timeMS, position, context) {
	var frameIndex = Math.floor(((timeMS%durationMS)/durationMS)*this.frameCount)*frameSize.X;
	context.drawImage(this.image,
            frameIndex,
			0,
            frameSize.X,
            frameSize.Y,
            position.X,
			position.Y,
            frameSize.X,
            frameSize.Y);
		
		//	context.drawImage(this.image,0,0);
  }
}