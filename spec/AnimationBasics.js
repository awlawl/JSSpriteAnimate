describe("Basic Animations", function() {
  
  var testImage = "spec/TestImages/TestAnimation.gif";
  var animation;
  var frameSize = {X:64,Y:64};
  var testDuration = 1000;
  var testFrameCount = 4;
  var canvas = document.createElement("canvas");
  var context = canvas.getContext('2d');
  canvas.height="100",
  canvas.width="100";
  document.all.appendChild(canvas);
  
  beforeEach(function() {
    animation = new Animation(testImage, frameSize, testDuration, testFrameCount);
	
	
	
  });
  
  it("must exist", function() {
    expect(animation).not.toBe(null);
  });
  
  it("must have an image property", function() {
	expect(animation.image).toBeDefined();	
  });
  
  it("must have an image property that is an image", function() {
    expect(animation.image.src).toBeDefined();
  });
  
  it("must have an image that is the one needed by the test", function() {
    expect(animation.image.src).toContain(testImage);
  });
  
  it("must track the size of each frame", function() {
	expect(animation.frameSize).toBeDefined();
  });
  
  it("must have the correct size of each frame", function() {
	expect(animation.frameSize).toEqual(frameSize);
  });
  
  it("must track the duration of the animation", function() {
	expect(animation.durationMS).toBeDefined();
  });
  
  it("must have the correct duration", function() {
	expect(animation.durationMS).toBe(testDuration);
  });
  
  it("must track the number of frames", function() {
	expect(animation.frameCount).toBeDefined();
  });
  
  it("must track the correct number of frames", function() {
	expect(animation.frameCount).toBe(5);
  });
  
  it("must have a drawFrame function", function() {
	expect(animation.drawFrame).toBeDefined();
  });
  
  it("must draw the first frame", function() {
	animation.drawFrame(0,{X:0,Y:0},context);
	var pixelData = context.getImageData(0,0,1,1);
	expect(pixelData[0]).toBe(1);
	expect(pixelData[1]).toBe(0);
	expect(pixelData[2]).toBe(0);
  });
});