const obj = {counter : 0};
// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;