/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

var pre_order = [1,2,4,7,3,5,6,8]
var in_order = [4,7,2,1,5,3,8,6]
var TreeNode = function(val){
  this.val = val;
  this.left;
  this.right;
}

var fn = function(pre_order,in_order){
  if (pre_order.length === 0) {
    // console.log('null')
    return null;
  }
// console.log(`pre_order:[${pre_order}],\tin_order:[${in_order}]`);

  var val = pre_order[0]
  var k = in_order.indexOf(val)
  // console.log(`[${k}]${val}`)

  var root = new TreeNode(val);
  // console.log("->left:", pre_order.slice(1,k+1),in_order.slice(0,k))
  root.left = fn(pre_order.slice(1,k+1),in_order.slice(0,k))
  
  // console.log("->right:",pre_order.slice(k+1),in_order.slice(k+1))
  root.right = fn(pre_order.slice(k+1),in_order.slice(k+1))
  // console.log(root);
  return root;
}

var res = fn(pre_order,in_order)

// console.log(res.left.val)
// console.log(JSON.stringify(res))
console.log(res.right)