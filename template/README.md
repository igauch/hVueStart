# hVueStart

>VUE构建工具

## 构建命令

``` bash
# 安装依赖
npm install

# 热更新运行在 localhost:8089
npm run dev

# 压缩并打包发布
npm run build

# 自动修复src下的代码格式
npm run fix
```

此工具是根据我司情况修改自VUE官方提供的构建工具，官方文档说明参考： [guide](http://vuejs-templates.github.io/webpack/) 和 [docs for vue-loader](https://vue-loader.vuejs.org/zh-cn/).

## 使用说明

## 目录说明
```$xslt
├── .babelrc                                 #babel配置文件
├── build                                    #打包配置和脚本文件夹
│   └── ...
├── config                                   #项目的主要配置
│   └── ...
├── .editorconfig                            #统一编辑器行为的edit配置文件
├── .eslintignore                            #eslint忽略配置文件
├── .eslintrc.js                             #eslint配置文件
├── frameworks                               #不能或不适合npm安装的插件文件夹
│   ├── howsoBasicStyle                      #公司样式文件夹
│   ├── howsoVueComponents                   #公司组件文件夹
│   └── layer                                #layer文件夹
├── .gitignore                               #git忽略列表文件
├── index.html                               #index文件
├── jsrules.json                             #符合公司代码规范和一些建议的eslint规则文件
├── package.json                             
├── .postcssrc.js                            #postcss配置文件
├── README.md
├── src                                      
│   ├── App.vue                              #引导主文件
│   ├── components                           #针对项目写的组件文件夹
│   ├── views                                #最终完整视图的vue文件目录
│   ├── main.js                              #引导的js
│   ├── router.index.js                      #路由配置文件
│   └── styles                               #关于样式的css、img、font等文件夹
│       ├── imgs
│       └── scss
└── static                                   #静态资源
    └── ...
```

## 修改说明
* 增加jQuery支持，在任何地方，现在都可以随心所欲的使用你熟悉的jQuery
* 默认启用了[lodash](https://lodash.com/docs)，在任何地方以this._使用，当然这个this必须是vue实例
* 使用官方推荐的[axios](https://github.com/mzabriskie/axios)作为http库，以this.$http使用
* 增加了echarts，以this.echarts使用，如无必要，请直接使用已经写好的echarts组件
* 增加了layer支持，还是以你熟悉的方式，在任何地方
* 增加了sass支持
* 新增公司的样式库、组件库，方便快速开始项目
* 修改了目录结构，见上面的目录说明
* 删除了单元测试的功能
* 修改了端口号为8089
* 修改了eslint代码格式
## 使用说明
#### 关于样式
* 需要修改的样式请直接在src/styles/scss下的customHowsoVar文件上修改、调整变量
* 对于项目中可以复用的样式写在src/styles/scss下的app文件下
#### 关于eslint配置
* 增加了拼写检查
* 增加了修复命令，见上面的构建命令
