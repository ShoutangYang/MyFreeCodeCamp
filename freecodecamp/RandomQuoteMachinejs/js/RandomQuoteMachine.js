/**
 * Created by shoutang.yang on 2017/4/15.
 */
// 1.建立颜色数组，
// 2.点击 newQuote按钮，产生随机数来获取颜色值，并更新文本和颜色

//    颜色数组
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var quotes={text:['Behind every successful man there\'s a lot u unsuccessful years. ','I think success has no rules, but you can learn a lot from failure.',
'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.','Failure is the mother of success.'],
            author:['Bob Brown','Jean Kerr','Colin L. Powell ','Thomas Paine']};
var quoteText='',author='';
function getQuote() {
console.log("into getQuote function");
var rand=Math.floor(4*Math.random());
quoteText=quotes.text[rand];
author=quotes.author[rand];

var quoteBack=document.getElementById('body');
quoteBack.style.backgroundColor=colors[rand];

document.getElementById('button-tween').style.backgroundColor=colors[rand];
document.getElementById('button-tumblr').style.backgroundColor=colors[rand];
document.getElementById('button-Newquote').style.backgroundColor=colors[rand];

    document.getElementById('text').style.color=colors[rand];
    document.getElementById('author').style.color=colors[rand];

document.getElementById('text').innerHTML=quotes.text[rand];

document.getElementById('author').innerHTML='--'+quotes.author[rand];
    
}
function pushTween() {
    openulr('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText + '" ' + author))
}
function pushSina() {
    openulr('http:\/\/service.weibo.com\/share\/share.php? title='+encodeURIComponent('"' + quoteText + '" ' + author))
}
function openulr(ulr) {
window.open(ulr,'share','width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
window.addEventListener('load',getQuote,false);