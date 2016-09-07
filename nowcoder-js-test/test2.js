function fizzBuzz(num) {
  if (typeof num !== 'number') {
    return false;
  }

  if ((num % 3 === 0) && (num % 5 === 0)) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

// console.log(fizzBuzz(15));

function argsAsArray(fn, arr) {
  return fn(arr[0], arr[1], arr[2]);
}

// console.log(argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']));

function speak(fn, obj) {
  this.greeting = obj.greeting;
  this.name = obj.name;
  return fn();
}

// console.log(speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}));

function functionFunction(str) {
  return function f(innerStr) {
    return str + ', ' + innerStr;
  }
}

// console.log(functionFunction('Hello')('world'));

function makeClosures(arr, fn) {
  return arr.map(function (cur,curIndex,array) {
    return function(){
      return cur*cur;
    }
  })

  return results;
}

var arr = [1, 2, 3];
var square = function (x) {
  return x * x;
};
var funcs = makeClosures(arr, square);

// console.log(funcs[1]());

function partial(fn, str1, str2) {
  return function result(str3) {
    return fn(str1, str2, str3);
  }
}
var sayIt = function (greeting, name, punctuation) {
  return greeting + ', ' + name + (punctuation || '!'); };
// console.log( partial(sayIt, 'Hello', 'Ellie')('!!!'));

function useArguments() {
  var sum = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    sum += item;
  })
  return sum;
}

// console.log(useArguments(1, 2, 3, 4));

function callIt(fn) {
  return fn.apply(this,Array.prototype.slice.call(arguments,1));    
}

var a = 1; var b = 2;
var test = function (first, second) { return first === a && second === b;}; 

// console.log(callIt(test, a, b));

function partialUsingArguments(fn) {
    var a_b = [].slice.call(arguments,1);
  return function result(){
        var c_d = [].slice.call(arguments,0);
        return fn.apply(null,a_b.concat(c_d))
    }
}

// var partialUsingArguments = function (fn) {
//   var params = Array.prototype.slice.call(arguments,1)
//     return fn.bind(this,params[0],params[1]);
// }

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var test = function (first, second, third, forth) {return first + second + third + forth;}
// console.log(partialUsingArguments(test, a, b)(c, d));


function curryIt(fn) {
    return function ax(a) {
      return function bx(b) {
        return function cx(c) {
          return fn(a,b,c);
        }
      }
    }
}
var fn = function (a, b, c) {return a + b + c}; 

console.log(curryIt(fn)(1)(2)(3));