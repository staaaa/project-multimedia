$(document).ready(function(){
    $(".btn, .fa, .go_up").click(function(){
        let click = new Audio("audio/clack.mp3");
        click.play();
    });
});