var calCD = function(n,s,l) {
  for(var x=1;x<=n;x++){
    for (var b=0; b <= n; b++) {
      for(var a=b; a<=n;a++){
        if ((a*(x-1)+b===n)
          &&(a*s+(a-1)<=l)
          &&(a%13!==0)
          &&(b*s+b-1<=l)
          &&(b%13!==0)
          ) {
          return x;
        }
      }
    }
  }
  
}
var input = '7 2 6';
var n = +input.split(' ')[0];
var s = +input.split(' ')[1];
var l = +input.split(' ')[2];
console.log(calCD(n,s,l));