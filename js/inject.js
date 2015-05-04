/**
 * Created by jaredchu on 4/11/15.
 */
function setEnterEqualSubmit() {
    input = document.getElementById("composerInput");
    if (input != null && input.type != 'undefined') {
        //console.log("Input ok, " + input.getAttribute('class'));
        input.addEventListener("keydown", function (e) {
            if (e.keyCode == 13) {
                submit = document.getElementsByName("send")[0];
                submit.click();
            } else {
                //e.preventDefault();
            }
        }, false);
    }
    else {
        //console.log('Input is null');
    }
}

var delay = 500;
while (delay <= 5000) {
    setTimeout(setEnterEqualSubmit, delay);
    delay += 500;
}

/*tabs click*/
navbar = document.getElementById('mJewelNav');
tabs = navbar.getElementsByClassName('_4g34');

messageDiv = tabs[3].getElementsByTagName('div')[0];
messButton = messageDiv.getElementsByTagName('a')[0];

setInterval(function () {
    if (messageDiv.getAttribute('class').indexOf("popoverOpen") > -1) {
        messageDiv.onclick = function (event) {
            event.preventDefault();
            //console.log("default")
        }
    }
    else {
        messageDiv.onclick = function (event) {
            messButton.click();
            //console.log("message");
        };
    }
    //console.log(messageDiv.getAttribute('class'));
}, 1000);


menuDiv = tabs[8];
menuButton = menuDiv.getElementsByTagName('a')[0];
menuDiv.onclick = function () {
    menuButton.click();
    //console.log("menu");
    setTimeout(setOptionsTabScrollable, 500);
};

window.onresize = function () {
    setTimeout(setOptionsTabScrollable, 500);
};

/*fix options tab scrollable*/
function setOptionsTabScrollable() {
    options_tab = document.getElementById('u_0_8');
    options_tab.style.overflow = 'scroll';
    options_tab.style.height = document.documentElement.clientHeight + 'px';
}