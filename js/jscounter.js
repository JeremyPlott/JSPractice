var counter = 0;

var display = () => {
    var nbrCtrl = document.getElementById("nbr");
    nbrCtrl.value = counter;
    {
        nbrCtrl.style.color = (counter % 2 == 0) ? "red" : "black"
        nbrCtrl.style.fontWeight = (counter % 3 == 0) ? "bold" : "normal"
        nbrCtrl.style.fontStyle = (counter % 5 == 0) ? "italic" : "normal"
    }
}
var increment = (x) => {
    counter += x;
    display();
}
var loaded = () => {
    display();
}