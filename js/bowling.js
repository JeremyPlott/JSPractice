var frames = [];
    
var loaded = () => {
    genScores();
    Display();
}
const genScores = () => {
    var total = 0;
    for(var i = 0; i < 10; i++) {
        var score = Math.floor(Math.random() * 31);
        frames.push(score);
        total += score;
    }
    frames.push(total);
}
const Display = () => {
    for(var i = 0; i < 11; i++) {
        document.getElementById("fr"+i).innerText = frames[i];
    }
}
var bowl = () => {
    frames = [];
    genScores();
    Display();
}