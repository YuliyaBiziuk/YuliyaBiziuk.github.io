$('<div></div>').attr('id','dane-programisty').appendTo('body');

$(document).ready(function(){
    $("button").click(function(){
    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"  , function(result){
            $.each(result, function(key, value){
            $("#dane-programisty").append("<b>" + key + ":" + "</b>" + " " + value + "<br>");
            });
        });
    });
});
