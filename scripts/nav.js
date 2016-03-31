$(function(){
    $("#nav li").hover(function(){
        $(this).find(".jnNav").show();//显示二级菜单栏
    },function(){
        $(this).find(".jnNav").hide();//隐藏二级菜单栏
    });
})