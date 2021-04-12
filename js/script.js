function init(){
    //add your javascript between these two lines of code
    var entry = document.getElementById("entrybutton");
    function myScript() {
        var textBox = document.getElementById("entryinput");
        var output = document.getElementById("textoutput");
        alert("Chris Murphy: " + textBox.value);
        output.innerHTML = textBox.value;
    }
    entry.addEventListener('click', myScript);
} 
window.addEventListener('load', init);