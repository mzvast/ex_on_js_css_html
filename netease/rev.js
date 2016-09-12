function Rev(input) {
  var arr = (input+'').split('');
  
  var revstr = arr.reverse();
  var i = 0;

  while(revstr[i]==0){
    i++;
  }
  var nozero = revstr.slice(i).join('');
  return +nozero;
}
var x =123,y= 100;
console.log(Rev(Rev(x) + Rev(y)))