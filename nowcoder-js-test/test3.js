function or(a, b) {
  return a||b;
}
// console.log(or(false, true));

function and(a, b) {
  return a&&b;
}

// console.log(and(false, true));

/**
 * 题目描述

完成函数 createModule，调用之后满足如下要求：
1、返回一个对象
2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值
 */
function createModule(str1, str2) {
  return {
    greeting:str1,
    name:str2,
    sayIt:function() {
      return this.greeting+', '+this.name;
    }
  }
}

// console.log(createModule('str1','str2').sayIt())

/**
 * 题目描述

获取数字 num 二进制形式第 bit 位的值。注意：
1、bit 从 1 开始
2、返回 0 或 1
3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1 
 */
function valueAtBit(num, bit) {
  var str = num.toString(2);
  return str[str.length - bit];
}
// function valueAtBit(num, bit) {
//   return (num>>bit-1)&1;
// }
// console.log(valueAtBit(128, 8));

//给定二进制字符串，将其换算成对应的十进制数字 
function base10(str) {
  return parseInt(str,2);
}

// console.log(base10('11000000'));

//将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

function convertToBinary(num) {
  // return ('00000000'+num.toString(2)).substr(-8);
  return ('00000000'+num.toString(2)).slice(-8);
}

// console.log(convertToBinary(65));multiply(3, 0.0001)

//求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题 

function multiply(a, b) {
  function flen(num) {//计算小数位数
    var str = num.toString().split('.')[1];
    if (str) {
      return str.length;
    }
    return 0;
  }
  var c = Math.pow(10,Math.max(flen(a),flen(b)));
  return (a*c)*(b*c)/(c*c);
}
// console.log(multiply(3, 0.0001));

//将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值 
function alterContext(fn, obj) {
  return fn.bind(obj)();//.bind()返回的是一个函数，所以需要立即执行。 
}
 
// function alterContext(fn, obj) {
//   return fn.call(obj);
// }
 
// function alterContext(fn, obj) {
//   return fn.apply(obj);
// }

// console.log(alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' }));

//给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
function alterObjects(constructor, greeting) {
  constructor.prototype.greeting = greeting;
}

var C = function(name) {this.name = name; return this;}; 
var obj1 = new C('Rebecca'); 
alterObjects(C, 'What\'s up'); 
// console.log(obj1.greeting);

//找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
//1、返回数组，格式为 key: value
//2、结果数组不要求顺序 

// function iterate(obj) {
//   var arr = []
//   for(i in obj){
//     if (obj.hasOwnProperty(i)) {
//       arr.push(i+': '+obj[i]) ;
//     }
//   }
//   return arr;
// }

function iterate(obj) {  
  return Object.getOwnPropertyNames(obj).map(function(item) {
    return item+': '+obj[item];
  })
}
var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
// console.log(iterate(new C()));

//给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
function containsNumber(str) {
  return /\d/.test(str);
}
// console.log(containsNumber('abc123'));


//给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false 

function containsRepeatingLetter(str) {
  return /([a-zA-Z])\1/.test(str);
}
// console.log(containsRepeatingLetter('rattler'));

//给定字符串 str，检查其是否以元音字母结尾
// 1、元音字母包括 a，e，i，o，u，以及对应的大写
// 2、包含返回 true，否则返回 false 
function endsWithVowel(str) {
  return /[aeiou]$/i.test(str);
}
// console.log(endsWithVowel('gorilla'));

//获取指定字符串
//给定字符串 str，检查其是否包含 3 个连续的数字
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false 
function captureThreeNumbers(str) {
  var result = str.match(/\d{3}/);
  return result?result[0]:false;
}
// console.log(captureThreeNumbers('9876543'));

//判断是否符合指定格式
//给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型 

function matchesPattern(str) {
  return /^\d{3}-\d{3}-\d{4}$/.test(str);
  // return /^(\d{3}-){2}\d{4}$/.test(str);
}
// console.log(matchesPattern('800-555-1212'));

//给定字符串 str，检查其是否符合美元书写格式
// 1、以 $ 开始
// 2、整数部分，从个位起，满 3 个数字用 , 分隔
// 3、如果为小数，则小数部分长度为 2
// 4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3 

function isUSD(str) {
  return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
}
console.log(isUSD('$20,933,209.93'));