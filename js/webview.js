/**
 * Created by jaredchu on 4/10/15.
 */

/*Webview object*/
var webview = document.getElementById('fb-frame');

/*all event of webview tag*/
webviewEvents = [
    'consolemessage',
    'dialog',
    'exit',
    'findupdate',
    'loadabort',
    'newwindow',
    'permissionrequest',
    'responsive',
    'sizechanged',
    'unresponsive',
    'zoomchange',
    'close',
    'contentload',
    'loadcommit',
    'loadredirect',
    'loadstart',
    'loadstop'
];


/*insert css*/
function addCss(fileUrl) {
    webview.insertCSS({
        file: fileUrl,
        runAt: 'document_start'
    });
}

/*insert javascript*/
function addScript(fileUrl) {
    webview.executeScript({
        file: fileUrl,
        runAt: 'document_end'
    });
}

/*insert css and script to webview*/
webview.addEventListener('loadcommit', function () {
    addScript("/js/inject.js");
    addCss('/css/inject.css');
});

/*fit width, height with window*/
function updateWebviews() {
    var webview = document.querySelector("webview");
    webview.style.height = document.documentElement.clientHeight - 25 + "px";
    webview.style.width = document.documentElement.clientWidth + "px";
}

onload = updateWebviews;
window.onresize = updateWebviews;