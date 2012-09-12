describe("Basic Animations", function() {
  
  var testImage = "spec/TestImages/TestAnimation.gif";
  var animation;
  
  beforeEach(function() {
    animation = new Animation(testImage);
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
  
  
});