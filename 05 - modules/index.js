var myModule1 = require('./myModule1');
myModule1.writeSomething();
myModule1.writeSomething();
myModule1.writeSomething();
myModule1.writeSomething();

var myModule1_b = require('./myModule1'); //get from cache
myModule1_b.writeSomething();

var myModule2 = require('./myModule2');

var instanceOne = myModule2('Dependency 1');
instanceOne.count();
instanceOne.count();
instanceOne.count();
instanceOne.count();

var instanceTwo = myModule2('Dependency 2');
instanceTwo.count();
instanceTwo.count();