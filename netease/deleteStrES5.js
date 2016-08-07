var deleteStr = function deleteStr(input) {
      var obj = {};
      var strArr = input.split('');
      for (var i = 0; i < strArr.length; i++) {
        var outterArr = strArr.slice(0);
        outterArr.splice(i, 1);
        // console.log("outterArr",outterArr);
        for (var j = 0; j < outterArr.length; j++) {
          var innerArr = outterArr.slice(0);
          innerArr.splice(j, 1);
          var currentStr = innerArr.join('');
          if (!obj[currentStr]) {
            obj[currentStr] = true;
          }
        }
      }
      return Object.keys(obj).length;
    };

console.log(deleteStr('data'));
console.log(deleteStr('abcdefghijk'));
// deleteStr('data');