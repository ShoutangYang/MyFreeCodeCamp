/**
 * Created by shoutang.yang on 2017/4/16.
 */
function getLoclaWwahter() {
    $.ajax({
        type: 'GET',
        url: 'http://v.juhe.cn/weather/index',
        dataType: 'JSONP',//跨域的问题
        data: {
            'cityname':'苏州',
            'dtype':'json',
            'format':2,
            'key':'4ba6ebc2a90979917492dee8c72616c1'
        },
       // jsonp:'jsonpcallback',
       error: function(XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!"+errorThrown);
        },
        success: function(result) {
            console.log(result) //console变量在ie低版本下不能用
            console.log(JSON.stringify(result));

        }
    })
}
function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
                .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
                .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                .getSeconds());
    return datetime;
}
window.addEventListener('load',getLoclaWwahter,false)