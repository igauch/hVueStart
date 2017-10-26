/*
 * 描述：pushTpl
 * 作者：twj94
 * 创建时间：2017/10/26
 * 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
 * Company:南京华苏科技有限公司
 */

var path=require('path');
var fs=require('fs');
var efs = require ('fs-extra');
var rm=require('rimraf');
var cp = efs.copy;

cp(path.resolve(__dirname,'../bootstrap/scss'),path.resolve(__dirname,'../template/frameworks/basicStyle'),(err)=>{
  if (err) throw err;
  console.log('复制样式文件到模板成功');
  cp(path.resolve(__dirname,'../template/frameworks/basicStyle/_variables.scss'),
    path.resolve(__dirname,'../template/src/styles/scss/customBasicStyle.scss'),(err)=>{
      if (err) throw err;
      console.log('创建自定义样式变量文件成功');
      fs.readFile(path.resolve(__dirname,'../template/frameworks/basicStyle/bootstrap.scss'),'utf8',(err,data)=>{
        if (err) throw err;
        var data=data.replace('variables','../../src/styles/scss/customBasicStyle');
        fs.writeFile(path.resolve(__dirname,'../template/frameworks/basicStyle/bootstrap.scss'),data,(err)=>{
          if (err) throw err;
          console.log('应用自定义样式变量成功');
        })
      });
    });
});

cp(path.resolve(__dirname,'../element'),path.resolve(__dirname,'../template/frameworks/element'),{filter:(stat, filepath, filename)=>{
  if(stat === 'file' && filename === 'components.json') {
    return true;
  }
  if (stat === 'directory' && (filename === 'packages' || filename === 'src' || filename === 'build')) {
    cp(filepath,path.resolve(__dirname,'../template/frameworks/element',filename),(err)=>{
      if (err) throw err;
    });
    return false;
  }
  return false;
}},(err)=>{
  if (err) throw err;
  console.log('复制element到模板成功');
});