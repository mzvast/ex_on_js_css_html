//not right
function find(rr) {  
  var counter = 0;
  var r = Math.sqrt(rr);
  // console.log(r);
  for(var x = -r; x*x<=rr;x++){
    var y = Math.sqrt(rr - x*x);
    if(parseInt(y)===y){      
      
      if (x*x!==rr) {
        console.log("(x=",x,",y=+/-",y,")");
        counter++;
      }else{
        console.log("(x=",x,",y=",y,")");
      }      
      counter++;
    }
  }
  return counter;
}

console.log(find(25))