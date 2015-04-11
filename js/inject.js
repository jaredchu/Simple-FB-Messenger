/**
 * Created by jaredchu on 4/11/15.
 */
function setEnterEqualSubmit() {
    input = document.getElementById("composerInput");
    if (input != null && input.type != 'undefined') {
        console.log("Input ok, " + input.getAttribute('class'));
        input.addEventListener("keydown", function (e) {
            if (!e) {
            }
            if (e.keyCode == 13) {
                submit = document.getElementsByName("send")[0];
                submit.click();
                text = document.getElementById("composerInput");
                text.value = "";
            }
        }, false);
    }
    else {
        console.log('Input is null');
    }
}

var delay = 500;
while (delay <= 5000) {
    setTimeout(setEnterEqualSubmit, delay);
    delay += 500;
}
