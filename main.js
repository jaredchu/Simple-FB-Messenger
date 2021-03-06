/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

wWidth = 400;
wHeight = 600;

chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create(
        'index.html',
        {'bounds': {'width': wWidth, 'height': wHeight}}
    );
});
