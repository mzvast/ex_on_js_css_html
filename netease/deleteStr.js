const deleteStr = (input)=>{
  let obj = {};
  let strArr = input.split('');
  for (let i = 0; i < strArr.length; i++) {
    let outterArr = strArr.slice(0);
    outterArr.splice(i,1);
    // console.log("outterArr",outterArr);
    for (let j = 0; j < outterArr.length; j++) {
      let innerArr = outterArr.slice(0);
      innerArr.splice(j,1);
      let currentStr = innerArr.join('');
      if (!obj[currentStr]) {
        obj[currentStr] = true;
      }
    }
  }
  return Object.keys(obj).length; 
}

console.log(deleteStr('data'));
console.log(deleteStr('abcdefgh'));
// deleteStr('data');