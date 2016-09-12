function fn(a,b,c,d) {
  var A = (a+c)/2;
  var B = (c-a)/2;
  var C = (d-b)/2;
  var Bp = (b+d)/2;
  if (B !== Bp) {
    console.log('No');
    return;
  }
  console.log(A.toFixed(0),B.toFixed(0),C.toFixed(0));
  return;
}

fn(1,-2,3,4)