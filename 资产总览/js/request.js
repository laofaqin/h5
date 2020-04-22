document.write("<script language=javascript src='/js/api.js'></script>");
document.write("<script language=javascript src='/js/axios.js'></script>");


var typename = [
    { "type": "zichan", "name": "资产总记录" },
    { "type": "shengji", "name": "升级积分", number: 3 },
    { "type": "xianjin", "name": "现金消费", number: 1 },
    { "type": "tuijian", "name": "推荐业绩积分", number: 4 },
    { "type": "jifen", "name": "积分消费", number: 5 },
    { "type": "fenhong", "name": "分红积分", number: 6 },
    { "type": "gongxiang", "name": "共享奖励", number: 7 },
    { "type": "shangcheng", "name": "商城收益", number: 2 },
    { "type": "xianshang", "name": "线上收益", number: 11 },
    { "type": "huokuan", "name": "货款收入", number: 8 }
];

function goback() {
    window.history.back();
};

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
//格式化时间
function formatTimeTwo(number, format) {

    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date(number);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}


function getParams() {
    var url = location.search; //获取url中"?"符后的字串  
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function setToken(cvalue) {
    document.cookie = "token=" + cvalue
};
function getToken() {
    var name = 'token' + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}


var url = '',
    productEnvironment = true,
    productApiUrl = "https://api.xy999888.com/api/",
    testApiUrl = "https://api.xy226688.com/api/";
url = productEnvironment ? productApiUrl : testApiUrl;





var Request = function (method, api, params, success, fail) {
    var token = getToken();
    var requestParams = {
        method: method,
        url: url + api,
        headers: {
            "Authorization": token,
            "content-type": "application/json",
        },
    }
    if ("GET" === method) {
        if (params) {
            requestParams.url = requestParams.url + '/' + params
        }
    } else if ("POST" === method) {
        requestParams.data = params || {}
    }
    return axios(requestParams).then(res => {
        let code = res.data.code;
        if (code == 1) {
            success && success(res.data.content)
        } else if (code == 403) {
            // 原缓存存在token，过期了
            if (getToken()) {
                // setToken("");
                alert('登录信息已过期,请重新登录');
                // location.href = '../register.html';
            } else {
                location.href = '../register.html';
            }
            // 原缓存没有token，即没绑定
        } else {
            alert(res.data.msg)
            fail && fail(res.data)
        }
    }).catch(err => {
        fail && fail(err)
    })
}
var postRequest = function (api, params, success, fail) {
    Request('POST', api, params, success, fail)
}
var getRequest = function (api, params, success, fail) {
    Request('GET', api, params, success, fail)
}

let loginRequest = function (params, success, fail) {
    postRequest(api.login, params, success, fail)
}