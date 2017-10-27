# 使用
此组件库包括依赖已经集成到公司的VUE构建工具，可直接使用
* 组件名即下面使用示例中的标签名去掉h剩下的那部分
* 如果要修改样式   
    * 所有的组件都对应着和组件名一致的class类    
    * 所有的组件内部都没有额外多余的样式，全部集成到公司的基础样式库里
    
# 侧边栏
实例见本项目的侧边栏
### 使用示例
```
<h-sidenav :datas="navListDatas"></h-sidenav>
```
### 参数
> datas  必须  树形的数组对象  

##### 数据示例
```
[
    {
        'label': '满意度洞察',
        'class': 'menu-root',
        'children': [
            {
                'label': '满意度概况',
                'class': 'subMenu1',
                'path': '/satisfactionGeneral',
                'children':[...]
            },...
        ]
    },...
]
```
> label 导航字段    
> class 类名  
> children 下级导航数组   
> path 导航路径

# 面包屑
实例见本项目的面包屑（上面的当前位置部分）
### 使用示例
```
<h-breadcrumb></h-breadcrumb>
```
> 此组件是配合侧边栏组件使用的，只要导航改变，其会自动完成你所期望的工作

# 下拉选择
实例  
### 使用示例
```
<h-select :items="areas" :labelKey="'areaName'"></h-select>
```
### 参数
> items 必须 数组对象     
> labelKey 必须 字符串，显示字段的属性值

##### 数据示例
```
[
    {"areaCode": "", "areaName": "无锡市", "id": 1},
    {"areaCode": "锡山区", "areaName": "锡山区", "id": 4},...
]
```
### 事件
> on-change 当选择改变时触发，返回一个当前选中的对象

# 多选
实例
### 使用示例
```
<h-checkbox :items="areas" :labelKey="'areaName'" @on-change="checkChange"></h-checkbox>
```
### 参数
> items 必须 数组对象     
> labelKey 必须 字符串，显示字段的属性值  
> defaultData 可选 数组对象  

##### 数据示例
```
[
    {"areaCode": "", "areaName": "无锡市", "id": 1},
    {"areaCode": "锡山区", "areaName": "锡山区", "id": 4},...
]
```
### 事件
> on-change 当选择改变时触发，返回一个当前选中的数组对象

# 折叠面板
实例
### 使用示例
```
<h-collapse :selected="false">
    <span slot="header">未选择的路</span>
    <p slot="body">黄色的树林里分出两条路...</p>
</h-collapse>
```
### 参数
> selected 必须 布尔值，是否展开，默认false不展开   

### slot
> header 折叠面板头部 
> body 折叠面板主内容

# 日期选择器
实例
### 使用示例
```
<h-datepicker @on-change="date=$event"></h-datepicker>
```
### 参数
> input相关：width(默认200px)、placeholder(默认请选择日期)   
> pane 数值类型，显示的日历窗格数量，默认1   
> format 字符串，日期的格式d\M\y，默认yyyy-MM-dd

### 事件
> on-change 当选择改变时触发，返回一个当前选中的日期格式化后的字符串

# echarts
实例
### 使用示例
```
<h-echarts :option="echartsOptions" style="height: 400px;width: 500px;"></h-echarts>
```
### 参数
> option 必须 echarts配置对象  

### 使用注意
需要给其或其父元素一定的宽高，这是echarts要求的

# 分页
实例
### 使用示例
```
<h-pagination :rows="10" :total="1186" @on-change="pageChange"></h-pagination>
```
### 参数
> rows 必须 数值，每页显示的条数    
> total 必须 数值，总条数   

### 事件
> on-change 当选中的页数改变时触发，返回一个当前选中的页数

# 单选
实例
### 使用示例
```
<h-radio :items="areas" :labelKey="'areaName'" @on-change="radioChange"></h-radio>
```
### 参数
> items 必须 数组对象     
> labelKey 必须 字符串，显示字段的属性值

##### 数据示例
```
[
    {"areaCode": "", "areaName": "无锡市", "id": 1},
    {"areaCode": "锡山区", "areaName": "锡山区", "id": 4},...
]
```
### 事件
> on-change 当选择改变时触发，返回一个当前选中的对象

# tab切换
实例
### 使用示例
```
<h-tab :items="mapNames" :labelKey="'name'" @on-change="tabChange"></h-tab>
```
### 参数
> items 必须 数组对象     
> labelKey 必须 字符串，显示字段的属性值

##### 数据示例
```
[
    {name: '地图', className: 'map-btn'},
    {name: '标准', className: 'map-btn1'},
    {name: '卫星', className: 'satellite-btn'}
]
```
### 事件
> on-change 当选择改变时触发，返回一个当前选中的对象

# 文件选择
实例
### 使用示例
```
<h-upload :accept="'image/*'">选择文件</h-upload>
```
### 参数
> accept 同input的accept属性，规定上传的类型
    
### 事件
> on-change 当选择的文件改变时触发，返回一个当前选中的原始文件对象
