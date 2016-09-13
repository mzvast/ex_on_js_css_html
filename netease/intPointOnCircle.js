//not Pass all tests
function find(rr) {  
  var counter = 0;
  var r = Math.sqrt(rr);
  // console.log(r);
  for(var x = -r; x<=r;x++){
    var xx = x*x;
    var yy = rr - xx;
    var y = Math.sqrt(yy);

    if(parseInt(y)===y){      
      if (xx===rr) {
        console.log("(x=",x,",y=",y,")=>1");
      }else{
        counter++;
        console.log("(x=",x,",y=+/-",y,")=>2");
      }      
      counter++;
    }
  }
  return counter;
}

console.log(find(9))