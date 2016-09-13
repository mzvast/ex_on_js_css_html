function colorRev(color) {
  var r = color.slice(1,3) 
  var rV = 255 - parseInt(r,16);
  var g = color.slice(3,5)
  var gV = 255 - parseInt(g,16);
  var b = color.slice(5)
  var bV = 255 - parseInt(b,16);
  var rH = ("00"+rV.toString(16).toUpperCase()).slice(-2);
  var gH = ("00"+gV.toString(16).toUpperCase()).slice(-2);
  var bH = ("00"+bV.toString(16).toUpperCase()).slice(-2);
  return "#"+[rH,gH,bH].join('');
}

console.log(colorRev('#0000FF'))
console.log(colorRev('#FFFF00'))