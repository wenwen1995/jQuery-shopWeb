$(function() {
  var $imgroll = $("#jnImageroll div a");
    $imgroll.css("opacity","0.7");
    var len = $imgroll.length;
    var index = 0;
    var adTimer = null;
    $imgroll.mouseover(function(){
        index = $imgroll.index(this);
        showImg(index);
    }).eq(0).mouseover();//开始的第一张图高亮

    //滑入 停止动画，滑出开始动画
    $("#jnImageroll").hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            showImg(index);
            index++;
            if(index == len){
                index = 0;
            }
        },5000);
    }).trigger("mouseleave");
})
//显示不同的图片
function showImg(index){
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href",newhref)
        .find("img").eq(index).stop(true,true).fadeIn()
        .siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
}
