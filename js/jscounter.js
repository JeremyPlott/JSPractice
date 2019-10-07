var counter = 0;

var display = () => {
    var nbrCtrl = document.getElementById("nbr");
    nbrCtrl.value = counter;
    {
        nbrCtrl.style.color = (counter % 2 == 0) ? "red" : "black"
        nbrCtrl.style.fontWeight = (counter % 3 == 0) ? "bold" : "normal"
        nbrCtrl.style.fontStyle = (counter % 5 == 0) ? "italic" : "normal"
    }
    
    if(counter % 3 == 0) {
        document.getElementById("td1").style.backgroundColor = "lime"
        document.getElementById("td3").style.backgroundColor = "orange"
        document.getElementById("td6").style.backgroundColor = "cyan"
        document.getElementById("td8").style.backgroundColor = "white"
        document.getElementById("td4").style.backgroundColor = "navy"
        document.getElementById("td2").style.backgroundColor = "peach"
        document.getElementById("td9").style.backgroundColor = "brown"
    }
    if(counter % 4 == 0) {
        document.getElementById("td5").style.backgroundColor = "yellow"
        document.getElementById("td7").style.backgroundColor = "pink"
        document.getElementById("td1").style.backgroundColor = "gray"
        document.getElementById("td8").style.backgroundColor = "lime"
        document.getElementById("td3").style.backgroundColor = "red"        
        document.getElementById("td6").style.backgroundColor = "green"
        document.getElementById("td4").style.backgroundColor = "cyan"        
    }
    if(counter % 5 == 0) {
        document.getElementById("td2").style.backgroundColor = "blue"
        document.getElementById("td4").style.backgroundColor = "turquoise"
        document.getElementById("td9").style.backgroundColor = "green"
        document.getElementById("td6").style.backgroundColor = "cyan"
        document.getElementById("td5").style.backgroundColor = "white"        
        document.getElementById("td3").style.backgroundColor = "yellow"
        document.getElementById("td7").style.backgroundColor = "purple"        
    }
    if(counter % 20 == 0) {
        document.getElementById("td1").style.backgroundColor = "black"
        document.getElementById("td2").style.backgroundColor = "black"
        document.getElementById("td3").style.backgroundColor = "black"
        document.getElementById("td4").style.backgroundColor = "black"
        document.getElementById("td5").style.backgroundColor = "black"
        document.getElementById("td6").style.backgroundColor = "black"
        document.getElementById("td7").style.backgroundColor = "black"
        document.getElementById("td8").style.backgroundColor = "black"
        document.getElementById("td9").style.backgroundColor = "black"
    }
}
var clear = () => {
    document.getElementById('nbr').value = 0;
    counter = 0;
    display();
}
var increment = (x) => {
    counter += x;
    display();
}
var loaded = () => {
    display();
}