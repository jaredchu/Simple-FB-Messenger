/**
 * Created by jaredchu on 4/10/15.
 */

/*all event of webview tag*/
webviewEvents = [
    'consolemessage',
    'contentload',
    'loadcommit',
    'loadredirect',
    'loadstart',
    'loadstop'
];
/*other events*/
//'dialog',
//'exit',
//'findupdate',
//'loadabort',
//'newwindow',
//'permissionrequest',
//'responsive',
//'sizechanged',
//'unresponsive',
//'zoomchange',
//'close'

/*Webview object*/
var webview = document.getElementById('fb-frame');

/*insert css*/
function addCss(cssString) {
    webview.insertCSS({
        code: cssString,
        runAt: 'document_start'
    });
}

/*insert javascript*/
function addScript(scriptString) {
    webview.executeScript({
        code: scriptString,
        runAt: 'document_end'
    });
}

css = "#header{top: 0;position: fixed;}::-webkit-scrollbar {display: none;}#mJewelNav ._4g34:nth-child(1),#mJewelNav ._4g34:nth-child(2),#mJewelNav ._4g34:nth-child(4),#mJewelNav ._4g34:nth-child(5){display: none !important;}.mobile-login-form{display:block;overflow:hidden;margin-top:15px;}";
script = 'document.getElementById("composerInput").addEventListener("keydown", function (e) {if (!e) {}if (e.keyCode == 13) {submit = document.getElementsByName("send")[0];submit.click();text = document.getElementById("composerInput");text.value = "";}}, false);';

webviewEvents.forEach(function (event) {
    webview.addEventListener(event, function () {
        addCss(css);
        addScript(script);
    })
});

function updateWebviews() {
    var webview = document.querySelector("webview");
    webview.style.height = document.documentElement.clientHeight + "px";
    webview.style.width = document.documentElement.clientWidth + "px";
}

onload = updateWebviews;
window.onresize = updateWebviews;