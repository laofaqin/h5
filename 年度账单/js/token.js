saveToken = function (token) {
    localStorage.setItem('reportToken', JSON.stringify(token))
}
getToken = function () {
    let aa = JSON.parse(localStorage.getItem('reportToken'))
    return aa
}
clearDetail = function(){
    localStorage.setItem("reportDetail",'')
}
getreport = function () {
    return axios({
        method: 'get',
        url: "https://api.xy999888.com/api/annualreport/myreport",
        headers: {
            "Authorization": getToken()
        },
    }).then(res => res.data)
}

login = function (phone, password) {
    return axios({
        method: 'post',
        url: "https://api.xy999888.com/api/user/login",
        data: {
            userName: phone,
            password: password
        }
    }).then(res => res.data)
}
