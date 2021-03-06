const defaultMinWindowWidth = 768;
const navbardefaultMinWindowWidth = 1200;

$(function() {
    $(window).resize(function(){
        if($(window).width() > defaultMinWindowWidth)
            $(".update").hide();
        else
            $(".update").show();
    });

    $("tbody tr").on({
        mouseenter: function () {
            if($(window).width() > defaultMinWindowWidth)
            $(this).children().first().find(".update").show();
        },
        mouseleave: function () {
            if($(window).width() > defaultMinWindowWidth)
            $(this).children().first().find(".update").hide();
        }
    });

    $("tbody > tr").on("click",".update",function(){
        //alert($(this).html());
        findJob($(this).parent().children().eq(3).html());
        $(this).parent().parent().hide();
    });
});