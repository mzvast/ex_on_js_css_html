function getNthFibonacci (count) {
   var memo = [1,1];
   function fib(n){    
    if(typeof memo[n] !== 'number'){
      var val = fib(n-1) + fib(n-2);
      memo[n] = val;
      return val;
    }
    else{
      return memo[n];
    }
   }
   return fib(count);
}

console.log(getNthFibonacci(999))