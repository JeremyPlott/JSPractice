$().ready( () => {
    console.log("JQ Ready");


    var num = 0;
    $("#inc").click( () => {
        $("#display").val(++num);
    });
    $("#inc10").click( () => {
        $("#display").val((num += 10));
    });
    $("#inc100").click( () => {
        $("#display").val((num += 100));
    });


    $("#dec").click( () => {
        $("#display").val(--num);
    });
    $("#dec10").click( () => {
        $("#display").val((num -= 10));
    });
    $("#dec100").click( () => {
        $("#display").val((num -= 100));
    });


    $("#clr").click( () => {
        $("#display").val((num = 0));
    });
});  

// const display = nbr => {
//     let ctrl = $("#nbr");
//     ctrl.val(nbr);
//     ctrl.css("color", (nbr % 2 == 0 ? "red" : "black"))
//         .css("fontWeight", (nbr % 3 == 0 ? "bold" : "normal"))
//         .css("fontStyle", (nbr % 5 == 0 ? "italic" : "normal"))
// }

// $.getJSON(url) 
//     .done( (res) => {
//         console.log(res);
//     });