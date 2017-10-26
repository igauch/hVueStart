/*
 * 描述：eslintFix
 * 作者：tianwenjie
 * 创建时间：2017/9/15
 * 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
 * Company:南京华苏科技有限公司
 */

let exec = require('child_process').exec;
var execStr='eslint --fix --ext .js,.vue ../../src,../../frameworks';
exec('eslint',(err)=>{
  if (err) {
    execStr='cd ./node_modules/.bin && '+execStr;
  }
});
exec(execStr,function (err, stdout, stderr) {
    if (err) {
        console.log(err + '\n' + stdout + '\n' + stderr);
    }
});
