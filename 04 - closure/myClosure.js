function myClosure(name) {
  var x = 0;
 
  //private method
  function doCount() {
    console.log("Count ",name,"",x++);
  };
  
  return {
    count: doCount
  };

};
 
var c1 = myClosure("Dependency 1");
c1.count(); //Count Dependency 1 0
c1.count(); //Count Dependency 1 1
 
var c2 = myClosure("Dependency 2");
c2.count(); //Count Dependency 2 0
c2.count(); //Count Dependency 2 1
