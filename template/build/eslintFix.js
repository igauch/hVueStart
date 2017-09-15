/*
 * 描述：eslintFix
 * 作者：tianwenjie
 * 创建时间：2017/9/15
 * 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
 * Company:南京华苏科技有限公司
 */

let exec = require('child_process').exec
exec('cd ./node_modules/.bin && eslint --fix --ext .js,.vue ../../src',function (err, stdout, stderr) {
    if (err) {
        console.log(err + '\n' + stdout + '\n' + stderr);
    }
})
