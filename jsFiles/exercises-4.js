function myFunc1() {
    var currForm = document.forms[0];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
      if (currForm[i].checked) {
        curr = currForm[i].value;
      }
    }
    if (curr == "Indentation") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput1").innerHTML = "Your choice: " + curr + txt;
}

function myFunc2() {
    var currForm = document.forms[1];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "a") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput2").innerHTML = "Your choice: " + curr + txt;
}

function myFunc3() {
    var currForm = document.forms[2];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "b") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput3").innerHTML = "Your choice: " + curr + txt;
}

function myFunc4() {
    var currForm = document.forms[3];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "c") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput4").innerHTML = "Your choice: " + curr + txt;  
}

function myFunc5() {
    var currForm = document.forms[4];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "a") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput5").innerHTML = "Your choice: " + curr + txt;  
}

function myFunc6() {
    var currForm = document.forms[5];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "d") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput6").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc7() {
    var currForm = document.forms[6];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "b") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput7").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc8() {
    var currForm = document.forms[7];
    var curr = "";
    var i;
    var txt;
    for (i = 0; i < currForm.length; i++) {
        if (currForm[i].checked) {
        curr = currForm[i].value;
        }
    }
    if (curr == "e") {
        txt = " is correct!";
    } else if (curr == "") {
        alert("Please choose one option.")
    } else {
        txt = " is not correct...";
    }
    document.getElementById("divOutput8").innerHTML = "Your choice: " + curr + txt;   
}

function myFunc2_1() {
    var currObjText = document.getElementById("input2_1").value;
    console.log(currObjText);
    if (currObjText == "25 125") {
        document.getElementById("divOutput2_1").innerHTML = "<strong>"+"That is correct!"+"</strong>"
    } else if (currObjText == "") {
        alert("Please input the result.")
    } else {
        document.getElementById("divOutput2_1").innerHTML = "Incorrect. Please try again."
    }
}

function myFunc2_2() {
    var currObjTxt1 = document.getElementById("input2_2_1").value;
    var currObjTxt2 = document.getElementById("input2_2_2").value;
    if (currObjTxt1 == "int(input(\"Enter the first number: \"))" && currObjTxt2 == "int(input(\"Enter the second number: \"))") {
        document.getElementById("divOutput2_2").innerHTML = "<strong>"+"That is correct!"+"</strong>"
    } else if (currObjTxt1 == "" || currObjTxt2 == "") {
        alert("Please input code snippet.")
    } else {
        document.getElementById("divOutput2_2").innerHTML = "Incorrect. Please try again."
    }
}

function myFunc2_3_1() {
    var currObjTxt1 = document.getElementById("input2_3_1").value;
    var currObjTxt2 = document.getElementById("input2_3_2").value;
    var currObjTxt3 = document.getElementById("input2_3_3").value;
    if (currObjTxt1 == "d") {
        document.getElementById("divOutput2_3_1").innerHTML = "<strong>"+"That is correct!"+"</strong>"
        document.getElementById("sp231").style.display = "inline";
    } else {
        document.getElementById("divOutput2_3_1").innerHTML = "Incorrect. Please try again."
        document.getElementById("sp231").style.display = "none";
    }
    if (currObjTxt2 == "codingmo") {
        document.getElementById("divOutput2_3_1").innerHTML = "<strong>"+"That is correct!"+"</strong>"
        document.getElementById("sp232").style.display = "inline";
    } else {
        document.getElementById("divOutput2_3_1").innerHTML = "Incorrect. Please try again."
        document.getElementById("sp232").style.display = "none";
    }
    if (currObjTxt3 == "['c', 'n', 'n']") {
        document.getElementById("divOutput2_3_1").innerHTML = "<strong>"+"That is correct!"+"</strong>"
        document.getElementById("sp233").style.display = "inline";
    } else {
        document.getElementById("divOutput2_3_1").innerHTML = "Incorrect. Please try again."
        document.getElementById("sp233").style.display = "none";
    }
}

