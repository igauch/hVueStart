# 自定义的VUE项目模板
> 感谢`VUE`提供的生态    
> 感谢`elemefe` `bootstrap`等一众优秀的开源库

# WHAT  
`vue-cli`官方提供的模板较为简单，基于一些实践，这里提供了   
* 

# 贡献相关  
## 原则   
* 

# 使用
推荐使用[yarn](https://yarnpkg.com/zh-Hans/)作为包管理工具，这里主要的原因是快速（安装过的依赖就不再安装，npm不会）   
请确保你已经具备ruby环境，如果没有，在Windows也很简单    
> 1. [下载](https://rubyinstaller.org/downloads/)安装文件 
> 2. 不要无脑安装，请确保勾选了 `add ruby executables to your path` 这个选项，避免以后的环境配置   
> 3. 安装最后`run 'risk install' to install MSYS2`这样的选项并不必须，随意  
> 4. [国内镜像](http://gems.ruby-china.org/)

* 安装依赖  
```
yarn || npm i
```   
* 启动`element`服务     
```
npm run el-dev
```
* 启动`bootstrap`服务     
```
npm run bs-dev
``` 
* 将修改过的`element`和`bootstrap`push到模板 
```
npm run pushTpl
``` 
* 初始化一个模板实例项目DEMO并运行    
```
npm run tplDemo
```

## 准备
这是基于vue-cli的VUE项目构建工具，所以请确保已经安装了vue-cli，最好是全局安装，如果没有，请在命令行工具里键入：
```
npm i -g vue-cli
```
另外需要注意的是node要求4版本以上，npm最好为最新版本以避免可能出现的异常
* 升级node
```
npm i -g n
n stable
```
* 升级npm
```
npm i -g npm
```
### 开始
```$xslt
vue init igauch/hVueStart 这里改成你想命名的文件夹名
```
紧接着会让你填两个空，输入或直接回车为默认值，建议按实际情况写上    
不出意外你会看到 `开始你的项目吧！` 恭喜，你已经成功将模板初始化到了本地  
和常规的一样，进入你初始化下来的项目，安装依赖并运行
```$xslt
npm install
npm run dev
```
### 可能出现的异常
* node和npm版本见上面
* python环境，因为公司的样式是基于sass编写的，而sass又依赖ruby，不对，好像哪里不对？ruby?python?好吧，我也不知道，而且这种情况目前只在win7下发现，如果发现有 ` Can't find Python`类似的字样，请下载并安装python2.7版本，环境变量配置在安装时有选项的
### 具体的使用请看template下的[readme文件](https://github.com/igauch/hVueStart/blob/master/template/README.md)或初始化到本地的文件夹根目录下的readme文件
## [vue-cli文档](https://github.com/vuejs/vue-cli)