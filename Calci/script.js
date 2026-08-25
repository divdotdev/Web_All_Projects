function expression(x) {
    let currentText = document.getElementById("display").value;
    document.getElementById("display").value = currentText + x;
}
function clearAll() {
    document.getElementById("display").value = "";
}
function clearOne() {
    let currentText = document.getElementById("display").value;
    let choppedText = currentText.slice(0, -1);
    document.getElementById("display").value = choppedText;
}
function result() {
    let mathProblem = document.getElementById("display").value;
    if (mathProblem == ""){
        return; 
    }
    let answer = eval(mathProblem);
    document.getElementById("display").value = answer;
}