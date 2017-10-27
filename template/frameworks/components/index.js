/*
 * 描述：将组件注册为全局可使用
 * 作者：tianwenjie
 * 创建时间：2017/9/11
 * 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
 * Company:南京华苏科技有限公司
 */

import sidenav from './sidenav/sidenav.js';
import breadcrumb from './breadcrumb/breadcrumb.js';
import echarts from './echarts/echarts.js';
import checkbox from './checkbox/checkbox.js';
import pagination from './pagination/pagination.js';
import tab from './tab/tab.js';
import select from './select/select.js';
import upload from './upload/upload.js';
import datepicker from './datepicker/datepicker.js';
import radio from './radio/radio.vue';
import collapse from './collapse/collapse.js';

const components = {
    hSidenav:sidenav,
    hBreadcrumb:breadcrumb,
    hEcharts:echarts,
    hCheckbox:checkbox,
    hPagination:pagination,
    hTab:tab,
    hSelect:select,
    hUpload:upload,
    hDatepicker:datepicker,
    hRadio:radio,
    hCollapse:collapse
};

const install = function(Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

export default install;
