document.write("<script language=javascript src='/js/axios.js'></script>");

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


var api = {
    login: 'user/login',//登录

};


var Request = function (method, api, params, success, fail) {
    var token = getToken();
    var requestParams = {
        method: method,
        url: url + api,
        header: {
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
        success && success(res)
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