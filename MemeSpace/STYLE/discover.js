document.getElementsByClassName("myBtn").onclick = changebackground();
var i = 1;

function changebackground() {

    if (i % 2 == 0) {
        document.body.style.backgroundImage = "url('file:///C:/Users/yashy/Desktop/Web%20Development/MemeSpace/IMG/bg2.jpg')";
        i++;
    } else {
        document.body.style.backgroundImage = "url('file:///C:/Users/yashy/Desktop/Web%20Development/MemeSpace/IMG/bg3.jpg')";
        i++;
    }
}