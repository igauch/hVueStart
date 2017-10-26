/*
 * 描述：openWebsite
 * 作者：twj94
 * 创建时间：2017/10/25
 * 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
 * Company:南京华苏科技有限公司
 */

var path = require('path');
var exec = require('child_process').exec;
var elPath = 'cd '+path.resolve(__dirname,'../element')+' && npm run dev';
console.log(elPath);
exec(elPath);
console.log('success');
exec('explorer \'http://localhost:8085/#/zh-CN/component/installation\'');
console.log(123);
// exec('cd ../bootstrap && npm i && bundle install && npm run docs-serve');
// exec('explorer \'http://localhost:9001/docs/4.0/components/buttons/\'');