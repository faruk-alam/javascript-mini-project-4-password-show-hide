const passWord = document.getElementById("pass");
const CheckBox = document.getElementById("checkbox");

function show() {
    if (CheckBox.checked) {
        passWord.setAttribute("type","text");
    }
    else {
        passWord.setAttribute("type","password");

    }
}