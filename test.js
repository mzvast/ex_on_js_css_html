var calculate = function(input){
    var n1 = input.split(' ')[0];
    var d1 = input.split(' ')[1];
    var n2 = input.split(' ')[2];
    var d2 = input.split(' ')[3];  
    var p1 = '';  
    var p2 = '';
    n1.split('').forEach(function(x) {
      if (x===d1) {
        p1+=x;
      }
    })
    n2.split('').forEach(function(x) {
      if (x===d2) {
        p2+=x;
      }
    })
    return (+p1) + (+p2);
}

console.log(calculate('3862767 6 13530293 3'));

