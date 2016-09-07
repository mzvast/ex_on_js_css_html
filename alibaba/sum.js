function sum(){  
  var flen = 0;
  return [].slice.call(arguments,0).reduce(function(pre,cur,curIndex,array){
    cur = parseFloat(cur);
     if(typeof cur === 'number'&&!isNaN(cur)){
       if((cur+'').indexOf('.')!== -1){
         len = (cur+'').split('.')[1].length
         flen = len>flen?len:flen;
         console.log(len);
       }
       pre.push(cur)
     }
    return pre;
  },[]).reduce(function(pre,cur,curIndex,array){
      return pre+=cur;
    },0).toFixed(flen)
}

console.log(sum(0.1, 0.2))