const _ =  require('lodash');

const numbers = [1,2,3,4,5];

_.each(numbers, function(n, i){
  console.log(n);
});