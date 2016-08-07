const url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....";


const parseQueryString = (url)=> {
  let obj={};
  [,query] = url.split('?');
  let params = query.split('&');
  params.forEach(function(param) {
    let [key,value] = param.split('=');    
   obj[key] = value;
  })
  return obj;
};

let obj = parseQueryString(url);
console.log(obj.key0)  // 输出0
// console.log(obj)  // 输出0