$(function(){
    $("#nav li").hover(function(){
        $(this).find(".jnNav").show();//��ʾ�����˵���
    },function(){
        $(this).find(".jnNav").hide();//���ض����˵���
    });
})