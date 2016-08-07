const sort = (array)=>{
  quicksort(array);
  return array;
}

const quicksort = (A,lo=0,hi=A.length-1)=>{
  if (lo<hi) {
    var q = partition(A,lo,hi);
    quicksort(A,lo,q-1);
    quicksort(A,q+1,hi);
  }  
}

var partition = (A,lo,hi)=> {  
  var pivot = A[hi];
  var i = lo - 1;
  for(var j = lo;j <= hi-1; j++){
    if (A[j]<pivot) {
      i++;
      [A[i],A[j]] = [A[j],A[i]]
      // var tmp = A[i];
      // A[i] = A[j];
      // A[j] = tmp;
    }
  }
  [A[i+1],A[hi]] = [A[hi],A[i+1]];
  // var tt = A[i+1];
  // A[i+1] = A[hi];
  // A[hi] = tt;

  return i+1;
}

console.log(sort([5, 100, 6, 3, -12]))