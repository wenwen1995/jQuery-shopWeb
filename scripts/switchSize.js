//”“≤‡≤˙∆∑≥ﬂ¥Á«–ªª
$(function(){
    $(".pro_size li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents("ul").siblings("strong").text($(this).text());
    })
})