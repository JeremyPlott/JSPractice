
$().ready( () => {
    console.log("jQuery here");
    $("h1").text("Heeeeeeelp!!!! this isn't my email");    
    $("#h0").html("<span style='color:lime;'>EEEEEEK</span>");
    $(".abc").css("color", "blue").css("fontStyle", "italic");   
    
    
    $("#displayname").click( () => {
        var input = $("#in").val();
        $("#out").val(input);
    });
});


const list = () => {
};

const add = () => {
};