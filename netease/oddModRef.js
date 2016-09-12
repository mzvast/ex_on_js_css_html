//Good Performance
function h(num) {  
  var n = (num - 1)/2 +1;
  return (1+num)*n/2;
}

function fn(num) {
  if (num==1) {return 1;}
  else if(num%2 ===0) {return h(num-1)+fn(num/2);}
  else if(num%2 !== 0) {return h(num)+fn((num-1)/2);}
}

function go(n) {
  var sum = 0;
  while(n>=1){
    sum+=h(n);
    n = (n-1)/2;
    console.log("n=",n) 
  }
  return sum;
}

// var start = new Date();
  // console.log(h(7))
  console.log(fn(1000000000))
  // console.log(h(11)+h(5)+h(1)+h(1))
// var end = new Date();
// console.log("time spent:",end-start,'ms')