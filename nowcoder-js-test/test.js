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
  var arr_cp =arr.slice();
  arr_cp.push(item);
  return arr_cp;
}

// console.log(append([1, 2, 3, 4],  10));

function truncate(arr) {
  var arr_cp =arr.slice();
  arr_cp.pop();
  return arr_cp;
}

// console.log(truncate([1, 2, 3, 4]));

function prepend(arr, item) {
  var arr_cp = arr.slice(0);
  arr_cp.unshift(item);
  return arr_cp;
}

// console.log(prepend([1, 2, 3, 4], 10));

function curtail(arr) {
  var arr_cp = arr.slice(0);
  arr_cp.shift();
  return arr_cp;
}
// console.log(curtail([1, 2, 3, 4]));

function concat(arr1, arr2) {
  var a1 = arr1.slice(0);
  var a2 = arr2.slice(0);
  return a1.concat(a2);
}
// console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 1]));

function insert(arr, item, index) {
  var a = arr.slice(0);
  a.splice(index,0,item);
  return a;
}

// console.log(insert([1, 2, 3, 4], 'z', 2));

function count(arr, item) {
  return arr.reduce(function(pre,cur,curIndex,array) {
    return item===cur?pre+1:pre;
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

// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort())

function square(arr) {
  return arr.reduce(function(pre,cur,curIndex,array) {
    pre.push(cur*cur);
    return pre;
  },[])
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
  if (num.slice(0,2) === '0x') {
    return 0;
  }
    return parseInt(num);
}

// console.log(parse2Int('12'),parse2Int('12px'),parse2Int('0x12'));

function count(start, end) {
  var counter = start;
  console.log(counter++)
  var timer = setInterval(function() {
      if(counter<=end){
        console.log(counter++); 
      }else{
        clearInterval(timer);
      }
  },100)
  return {
    cancel:function() {
      clearInterval(timer);
    }
  };
};

var controller = count(1,10);
setTimeout(function() {
  controller.cancel();
},306)
