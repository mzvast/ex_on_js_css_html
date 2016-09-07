function sum(arr) {
  var sum = arr.reduce(function(pre,current,currentIndex,array) {
    return current + pre;
  },0);
    return sum;
}

// console.log(sum([ 1, 2, 3, 4 ]));

function remove(arr, item) {
  return arr.reduce(function(pre,cur,curIndex,array) {
    if (item === cur) {
      return pre;
    }else{
      pre.push(cur);
      return pre;
    }
  },[]) 
}
// console.log(remove([1, 2, 3, 4, 2], 2));

function removeWithoutCopy(arr, item) {
  while(arr.indexOf(item)!== -1){
    arr.splice(arr.indexOf(item), 1);
  }
  return arr;
}

// console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));

function append(arr, item) {
  return arr.slice().concat(item);
}

// console.log(append([1, 2, 3, 4],  10));

function truncate(arr) {
  return arr.slice(0,arr.length-1);
}

// console.log(truncate([1, 2, 3, 4]));

function prepend(arr, item) {
  return [item].concat(arr);
}

// console.log(prepend([1, 2, 3, 4], 10));

function curtail(arr) {
  return arr.slice(1);
}
// console.log(curtail([1, 2, 3, 4]));

function concat(arr1, arr2) {  
  return arr1.concat(arr2);
}
// console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 1]));

function insert(arr, item, index) {
  //var a = arr.slice(0);
  //a.splice(index,0,item);
  //return a;
  return arr.slice(0,index).concat(item).concat(arr.slice(index))
}

// console.log(insert([1, 2, 3, 4], 'z', 2));

function count(arr, item) {
  return arr.reduce(function(pre,cur,curIndex,array) {
    return pre + (cur===item?1:0);
    // return item===cur?pre+1:pre;
  },0)
}

// console.log(count([1, 2, 4, 4, 3, 4, 3], 4));

function duplicates(arr) {
  var a = arr.slice(0).sort();
  var dup = [];
  for(var i = 0; i < a.length-1; i++){
    if (a[i] === a[i + 1]) {
      if(dup.indexOf(a[i]) === -1){
        dup.push(a[i]);
      }
    }
  }
  return dup;
}

function duplicates(arr) {
  return arr.reduce(function(pre,cur,curIndex,array){
        var temp = array.slice(0,curIndex).concat(array.slice(curIndex+1));
        if(temp.indexOf(cur)!==-1&&pre.indexOf(cur)===-1){
            pre.push(cur);
        }
        return pre;
    },[])
}

// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort())

function square(arr) {
  return arr.map(function(cur,curIndex,array){
    return cur*cur;
  })
}

// console.log(square([1, 2, 3, 4]));


function findAllOccurrences(arr, target) {
  return arr.reduce(function(pre,cur,curIndex,array) {
    if (cur === target){
      pre.push(curIndex);
    }
    return pre;
  },[])
}

// console.log(findAllOccurrences('abcdefabc'.split(''), 'a').sort());


function parse2Int(num) {
  // if (num.slice(0,2) === '0x') {
  //   return 0;
  // } 
    return parseInt(num.match(/^(\d+)/)[0]);
}

// console.log(parse2Int('12'),parse2Int('12px'),parse2Int('0x12'));

function count(start, end) {
  console.log(start);
    var counter = start;    
    var h = setInterval(function(){
        if(counter>=end){
            clearInterval(h);            
        }else{
            console.log(++counter);   
        }
            
    },100);    
    return {
        cancel:function(){
            clearInterval(h);
        }
    };
}

var controller = count(1,10);
setTimeout(function() {
  controller.cancel();
},306)
