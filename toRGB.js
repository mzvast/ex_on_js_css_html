var toRGB = function (str) {
  if(!str.startsWith('#')||str.length!==7){
    return str;
  }
  var r = str.slice(1, 3);
  var g = str.slice(3, 5);
  var b = str.slice(5, 7);
  return "rgb("+parseInt('0x'+r)+","+parseInt('0x'+g)+","+parseInt('0x'+b)+")";
}
console.log(toRGB("#0000FF")) ;         // 输出 rgb(0, 0, 255)
console.log(toRGB("invalid")) ;         // 输出 invalid
console.log(toRGB("#G00"))   ;