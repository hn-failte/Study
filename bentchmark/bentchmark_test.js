const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

// add tests
suite.add('StringBuffer#concat', function() {
    function StringBuffer(str){
        var string = str ? [str] : [];
        if(!StringBuffer.prototype.append) {
            StringBuffer.prototype.append = function (str) {
                string.push(str);
            }
            StringBuffer.prototype.toString = function () {
                return string.join("");
            }
        }
    }
    // StringBuffer拼接
    let str = new StringBuffer("");
    for(let i = 0; i<18024; i++){
        str.append(i);
    }
  })
  .add('String#concat', function() {
    // 传统拼接
    let str = "";
    for(let i = 0; i<18024; i++){
        str += i;
    }
  })
  .on('cycle', function(event) {
    console.log(event.target.toString());
  })
  .on('complete', function() {
      console.log(this.filter)
    //   console.log(Object.prototype.toString.call(this).slice(8, -1))
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Fastest is ' + this.filter('fastest'));
  })
  // run async
  .run({ 'async': true });
