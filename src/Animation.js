function Animation(imageSource, frameSize, durationMS, frameCount) {
  this.image=new Image();
  this.image.src = imageSource;
  this.frameSize = {X: frameSize.X, Y: frameSize.Y};
  this.durationMS = durationMS;
  this.frameCount = frameCount;
  
}