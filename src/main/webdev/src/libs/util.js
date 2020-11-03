

//全局数据
export function GData(GKey, GValue) {
    window.GData = window.GData || {} ;
    if (GValue != undefined) {
        window.GData[GKey] = GValue;
    } else {
        return window.GData[GKey];
    }
}

export function sessionData(key, value) {
    if(value) {
        value = JSON.stringify(value);
        sessionStorage.setItem(key, value)
    }else {
        let value = sessionStorage.getItem(key);
        value = JSON.parse(value);
        // sessionStorage.removeItem(key)
        return value;
    }
}

export function sessionId(sessionId) {
    if (sessionId) {
        sessionStorage.setItem("sessionId", sessionId);
    } else {
        return sessionStorage.getItem("sessionId");
    }
}
//提示更新APP
export function updateApp(title) {
    setTit(title)
    let url = '';
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        url = 'https://itunes.apple.com/cn/app/北京通/id1158919706?mt=8'
    } else {
        url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.systoon.beijingtoon'
    }
    confirm({
        title: '当前版本过低',
        titleStatus: 1,
        message: '请更新'+title+'至最新版本，体验更多便利服务',
        btnOk: '<span style="color: red">去更新<span>',
        btnOkFun: function () {
            if (isiOS) {
                let iframe = '\<iframe id="iframe"  style="width:100%;height:100%;border:none;position:absolute;top:0; "  src="' + url + '"   \>';
                iframe += '\<\/iframe>';
                document.body.innerHTML = iframe;
                //let iframe = document.createElement("iframe");
                //iframe.src=url;
                //iframe.style="width:100%;height:100%;border:none;position:absolute;top:0; " ;
                //document.body.appendChild(iframe);
                iframe = document.getElementById("iframe")
                setTimeout(function () {
                    closeWindow();
                })
            } else {
                window.location.replace(url);
            }
        },
        btnEscFun: function () {
            closeWindow();
        }
    });
}
/*
 * 深拷贝
 */
export function deepCopy(source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key];
    }
    return result;
}

/**
 * 设置页面标题
 * @param name
 * @returns {null}
 */
export function setTit (title) {
    if (!title) return;
    document.title = title;

    try{
        setTitle(title)
    }catch (e){

    }
}
/**
 * 获取url参数
 * @param name
 * @returns {*}
 */
export function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r === null) {
        var reg2 = /^.*?[?]/;
        var r2 = window.location.hash.replace(reg2, "")
        r = r2.match(reg);
    }
    if(r != null) return decodeURIComponent((r[2]));
    return null;
}
/**
 * 关闭toon
 */
export function closeWindow() {
    var params = {
        "functionType": 1
    };
    window.location.href = "toon://mwap/window?params=" + JSON.stringify(params);
}

/**
 * 加载更多的函数 ； shaobo
 *  droploadUpOnScroll(callback , "MoreAndMore");
 */
export function droploadUpOnScroll(callback, ele, scrollEle) {


    if (!callback) {
        window.onscroll = false;
        return false;
    }
    if (!ele) {
        ele = "droploadDOM";
        if (!document.getElementById(ele)) {
            var droploadDOM = document.createElement("p");
            droploadDOM.id = 'droploadDOM';
            document.body.appendChild(droploadDOM);
        }
    }
    var MAM = document.getElementById(ele);	//绑定元素
    var gap = parseInt(MAM.getAttribute("data-gap")) || 0; //获取差值



    if (!scrollEle) {
        var winHeight = window.innerHeight;
        var mTop, sTop, result;
        window.onscroll = function () {
            mTop = MAM.offsetTop;
            sTop = document.body.scrollTop;  //滚动条距离顶部
            result = mTop - sTop;
            if (result <= (winHeight + gap)) {
                callback();  //回调
            }
        }
    } else {

        let scrollContainer = document.getElementById(scrollEle)
        let winHeight = scrollContainer.offsetHeight;
        let mTop, sTop, result;

        console.log(scrollContainer)
        scrollContainer.onscroll = function () {



            mTop = MAM.offsetTop;
            sTop = scrollContainer.scrollTop;  //滚动条距离顶部
            result = mTop - sTop;
            if (result <= (winHeight + gap)) {
                callback();  //回调
            }
        }
    }
}
/**
 * confirm组件
 * @param {Object} param
 */
export function onLine(param) {
    if(window.navigator.onLine==true){
        return true
    }
    return false
}

/**
 * confirm组件
 * @param {Object} param
 */
export function confirm(param) {
    var componentsAlert = document.getElementById("componentsAlert") || false;
    //if(!param ){componentsAlert.style={display : "none"}}
    if (!param && componentsAlert.parentNode) { componentsAlert.parentNode.removeChild(componentsAlert); }
    var param = param || {};
    param.show = param.show || true; //默认显示
    param.title = param.title || "";
    param.message = param.message || "可能是网络环境不稳定引起的系统异常，请新打开页面后重试！";
    param.btnEsc = param.btnEsc == '' ? '' : param.btnEsc || "取消";
    param.btnOk = param.btnOk || "确定";
    param.btnOkFun = param.btnOkFun || function () { };
    param.btnEscFun = param.btnEscFun || function () { };
    param.input = param.input || false;
    param.class = param.class || "";
    if (!componentsAlert) {
        var style = '<style>';
        style += '.componentsAlert {z-index: 999;position: fixed;top:0%;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.7); }\
						.componentsAlert .content{color: #030303;position: fixed;top:50%;left: 50%; -webkit-transform: translate(-50%,-50%);width:270px;background: rgba(255,255,255,0.90);border-radius: 5px;text-align: center;}\
						.componentsAlert .title{padding:20px 0 0 0 ;}\
						.componentsAlert .message{font-size: 13px;line-height: 150%;#color:#030303;padding:24px 15px 15px 15px;}\
						.componentsAlert .btnGroup{line-height: 43px;height: 43px; font-size: 0; }\
						.componentsAlert .btnGroup .btn {display:none; font-size:17px }\
						.componentsAlert .btnGroup.esc.ok .btn {width: 50%;display: inline-block;}\
						.componentsAlert .btnGroup.ok .btn.btnOk {width: 50%;display: inline-block;}\
						.componentsAlert .btnGroup .btnOk{color: #007AFF;}\
						.componentsAlert .btnGroup .btnEsc{color: #007AFF;}\
						.componentsAlert .lsh-confirm-pwd{margin: 0 auto 15px auto;width: 240px;height: 24px;padding-left: 6px;}\
						.componentsAlert .lsh-confirm-pwd::after{border-radius: 2px;}\
						.componentsAlert .lsh-confirm-input{width: 240px;height: 24px;position:absolute;z-index:99;left:6px;top:2px;line-height: 24px;font-size: 13px;color: #000;}\
						'
        style += '</style>';

        var html = '<div class="componentsAlert  ' + param.class + ' "  style="display:none;" id="componentsAlert">';
        html += '<div class="content">';
        html += param.title ? '<p class="title" > ' + param.title + '</p>' : '';
        html += '<p  class="message"  >';
        html += param.message;
        html += '</p>';
        html += param.input ? '<div class="lsh-confirm-pwd hairline"><input maxlength="18" id="textPwd" type="password" class="lsh-confirm-input" placeholder="输入实名认证密码"></div>' : '';
        html += '<p class="btnGroup ' + (param.btnEsc != "" ? "esc" : "") + ' ok hairline-top">';
        html += '<span  class="btn btnEsc hairline-right" id="AlertBtnEsc" >' + param.btnEsc + '</span>';
        html += '<span class="btn btnOk "  id="AlertBtnOk"  > ' + param.btnOk + '</span>';
        html += '</p>';
        html += '</div></div>';
        var alertDiv = document.createElement("div");
        alertDiv.innerHTML = style + html;
        document.body.appendChild(alertDiv);
        componentsAlert = document.getElementById("componentsAlert");
        //绑定事件
        document.getElementById("AlertBtnEsc").addEventListener('click', function () {
            param.btnEscFun();
            componentsAlert.style.display = "none";
            if (componentsAlert.parentNode) { componentsAlert.parentNode.removeChild(componentsAlert); }
        }, false);
        document.getElementById("AlertBtnOk").addEventListener('click', function () {
            param.btnOkFun();
            componentsAlert.style.display = "none";
            if (componentsAlert.parentNode) { componentsAlert.parentNode.removeChild(componentsAlert); }
        }, false);
    }
    if (param.show) {
        componentsAlert.style.display = "block";
    } else {
        componentsAlert.style.display = "none";
    }
}
/**
 * 补零
 * @param num
 * @returns {*}
 */
export function zeroFill(num) {
    if (num > 0 && num < 10 || num.toString().length == 1 && num == 0) {
        return '0' + num;
    }
    return num;
}

/**
 * 毫秒转换友好的显示格式
 * 输出格式：21小时前
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export function dateStr(date) {
    //获取js 时间戳
    var time = new Date().getTime();
    var _data = new Date(parseInt(date));
    //去掉 js 时间戳后三位，与php 时间戳保持一致
    time = parseInt((time - date) / 1000);

    //存储转换值
    var s;
    if (time < 60 * 1) {//1分钟内
        return '刚刚';
    } else if ((time < 60 * 60) && (time >= 60 * 1)) {
        //超过十分钟少于1小时
        s = Math.floor(time / 60);
        return s + "分钟前";
    } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
        //判断是否为昨天
        //下个月
        if (_data.getMonth() < (new Date().getMonth())) {
            return "昨天 "
        } else if (_data.getDate() < (new Date().getDate())) {
            return "昨天 "
        }
        //超过1小时少于24小时
        s = Math.floor(time / 60 / 60);
        return s + "小时前";
    } else if ((time < 60 * 60 * 24 * 2) && (time >= 60 * 60 * 24)) {
        //昨天
        return "昨天 "
    } else {
        return false;
    }
}

/**
 var time1 = new Date().Format("yyyy-MM-dd");
 var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");
 */
export function dateFormat(fmt, timestamp) {
    //if (util.dateStr(timestamp)) { return util.dateStr(timestamp) }
    var _data = new Date(parseInt(timestamp));
    var o = {
        "M+": _data.getMonth() + 1, //月份
        "d+": _data.getDate(), //日
        "h+": _data.getHours(), //小时
        "m+": _data.getMinutes(), //分
        "s+": _data.getSeconds(), //秒
        "q+": Math.floor((_data.getMonth() + 3) / 3), //季度
        "S": _data.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_data.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/**
 * 文件下载
 */
export function DownURL(url){
    try{
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    }catch(e){
        console.log('下载失败')
    }
}

/**
 * 对象转换成url键值对
 */
export function objTurnToKeyValue(url, data) {
    if(typeof(url) == 'undefined' || url == null || url == '') {
        return '';
    }
    if(typeof(data) == 'undefined' || data == null || typeof(data) != 'object') {
        return '';
    }
    url = (url.indexOf("?") != -1) ? "" : "?";
    for(var k in data) {
        url = ((url.indexOf("=") != -1) ? "?" : "") + k + "=" + encodeURI(data[k]);
        console.log(url);
    }
    return url;
}

export function checkUrl(str) {
    var RegUrl = new RegExp();
    RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");//jihua.cnblogs.com
    if (!RegUrl.test(str)) {
        return false;
    }
    return true;
}


//去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
export  function trim(str,type){
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}

/**
 *
 * 周日切换
 */
export function weekArr(num) {
    if(num>=7){
        num=num%7;
    }
    var weekArr=["周日","周一","周二","周三","周四","周五","周六"]

    var numarr= weekArr[num]
    return numarr


}
//替换*
//replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
function replaceStr(str, regArr, type,ARepText) {
    var regtext = '', Reg = null,replaceText=ARepText||'*';
    //replaceStr('18819322663',[3,5,3],0)
    //188*****663
    //repeatStr是在上面定义过的（字符串循环复制），大家注意哦
    if (regArr.length === 3 && type === 0) {
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2')
    }
    //replaceStr('asdasdasdaa',[3,5,3],1)
    //***asdas***
    else if (regArr.length === 3 && type === 1) {
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
        Reg = new RegExp(regtext);
        var replaceCount1 = repeatSte(replaceText, regArr[0]);
        var replaceCount2 = repeatSte(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
    }

    //replaceStr('1asd88465asdwqe3',[5],0)
    //*****8465asdwqe3
    else if (regArr.length === 1 && type == 0) {
        regtext = '(^\\w{' + regArr[0] +  '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatSte(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    //replaceStr('1asd88465asdwqe3',[5],1,'+')
    //"1asd88465as+++++"
    else if (regArr.length === 1 && type == 1) {
        regtext = '(\\w{' + regArr[0] +  '}$)'
        Reg = new RegExp(regtext);
        var replaceCount = repeatSte(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
}

//ES6新增的Set数据结构，类似于数组去重，
export function removeRepeatArray(arr){
    return Array.from(new Set(arr))
}
//返回数组（字符串）出现最多的几次元素和出现次数
//arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
//eg  getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3,1)传参（rank=3，ranktype=1），只返回出现次数排序（升序）前三的
export function getCount(arr, rank,ranktype){
    var obj = {}, k, arr1 = [];
    //记录每一元素出现的次数
    for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i];
        if (obj[k]) {
            obj[k]++;
        }
        else {
            obj[k] = 1;
        }
    }
    //保存结果{el-'元素'，count-出现次数}
    for (var o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //排序（降序）
    arr1.sort(function (n1, n2) {
        return n2.count - n1.count
    });
    //如果ranktype为1，则为升序，反转数组
    if(ranktype===1){
        arr1=arr1.reverse();
    }
    var rank1 = rank || arr1.length;
    return arr1.slice(0,rank1);
}
//返回数组（字符串）一个元素出现的次数
//getEleCount([1,2,3,4,5,66,77,22,55,22],22)
//2
export function getEleCount (obj, ele) {
    var num = 0;
    for (var i = 0, len = obj.length; i < len; i++) {
        if (ele == obj[i]) {
            num++;
        }
    }
    return num;
}
//筛选数组:删除值为'val'的数组元素
//removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
//["aaa"]   带有'test'的都删除

//removeArrayForValue(['test','test1','test2','test','aaa'],'test')
//["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
export function removeArrayForValue(arr,val,type){
    return arr.filter(function (item) {
        return type? item.indexOf(val) === -1 : item !== val
    })
}
//随进产生颜色
export function randomColor(){
    //randomNumber是上面定义的函数
    //写法1
    return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';

    //写法2
    return '#'+Math.random().toString(16).substring(2).substr(0,6);

    //写法3
    var color='#';
    for(var i=0;i<6;i++){
        color+='0123456789abcdef'[randomNumber(15)];
    }
    return color;
}
//cookie
//设置cookie
export function setCookie(name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}
//获取cookie
export function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=');
        if(arr2[0]==name)
        {
            return arr2[1];
        }
    }
    return '';
}
//删除cookie
export function removeCookie(name){
    setCookie(name,1,-1);
}

/** ==================== 各种正则 ==================== */
/**
 * validator校验
 *              -- Author By Dio Zhu. on 2017.5.10
 */
export function validateEmail (val) {
    let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; // (字母、数字、下划线、-、. )@(字母、数字、-)
    return re.test(val);
};
export function validateTel (val) {
    let re = /^0\d{2,3}-?\d{7,8}$/; // 0开头2~3位区号，可以加-（也可不加），加上7~8位数字
    return re.test(val);
};
export function validateMobile (val) {
    let re = /^1\d{10}$/; // 1开头的11位数字
    return re.test(val);
};
/**
 * 不允许输入特殊字符
 * */
export function validateText (val) {
    let re = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
    return re.test(val);
};
/**
 * 输入手机号的校验
 * */
export function validatePhone (val) {
    let re = /^0?1[3|4|5|7|8]\d{9}$/;
    return re.test(val);
};
/**
 * 数字
 * */
export function validateNumbers (val) {
    let re = /^[0-9]*$/;
    return re.test(val);
};
/**
 * 输入身份证号的校验
 * */
export function validateCard (val) {
    let re = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    return re.test(val);
};

//校验表情
export function isEmojiCharacter(substring) {
    for ( var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
            if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                if (0x1d000 <= uc && uc <= 0x1f77f) {
                    return true;
                }
            }
        } else if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1);
            if (ls == 0x20e3) {
                return true;
            }
        } else {
            if (0x2100 <= hs && hs <= 0x27ff) {
                return true;
            } else if (0x2B05 <= hs && hs <= 0x2b07) {
                return true;
            } else if (0x2934 <= hs && hs <= 0x2935) {
                return true;
            } else if (0x3297 <= hs && hs <= 0x3299) {
                return true;
            } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                || hs == 0x2b50) {
                return true;
            }
        }
    }
}
//rem 适配 1rem=100px
//(function (doc, win) {
//  var docEl = doc.documentElement,
//      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//      recalc = function () {
//          var clientWidth = docEl.clientWidth;
//          if (!clientWidth) return;
//          //如果屏幕大于750，就设置clientWidth=750，防止font-size会超过100px
//          if(clientWidth>750){clientWidth=750}
//          //设置根元素font-size大小
//          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
//      };
//  //屏幕大小改变，或者横竖屏切换时，触发函数    
//  win.addEventListener(resizeEvt, recalc, false);
//  //文档加载完成时，触发函数 
//  doc.addEventListener('DOMContentLoaded', recalc, false);
//})(document, window);
/**
 * toon引擎关闭toon
 */
export function closeToonWindow() {
    toongine.app.shutdown({
        callback: res => {
            console.log("res: " + res.code);
        }
    });
}
