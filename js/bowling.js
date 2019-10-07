var arr = [ [], [], [] ]
var frames = [];
    
var loaded = () => {
    genScores();
    Display();
}
const genScores = () => {
    for(var j = 0; j < 3; j++) { // playing around with 3 games
        
        var total = 0;
        for(var i = 0; i < 10; i++) {
            var score = Math.floor(Math.random() * 31);
            frames.push(score);
            total += score;
        }
        frames.push(total);
        j++;
    }    
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