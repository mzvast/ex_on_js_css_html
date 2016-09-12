//Bad Performance
function fn(num) {
  // console.log('num=',num)
  if (num%2 !== 0) {return num;}
  else{
    for(var i = num - 1;i>0;i=i-2){
      if (num%i === 0) {
        // console.log('i=',i,'num=',num)
        return i
      };
    }
  }

}

function go(n) {
  var sum = 0;
  for(var i = 1;i<=n;i++){
    var val = fn(i);
    if(val !== undefined){
      sum+= val;
    }
  }
    return sum;
}

var start = new Date();
// for (var i = 1; i < 12; i+=1) {
  console.log(go(11))
// }
var end = new Date();
console.log("time spent:",end-start,'ms')