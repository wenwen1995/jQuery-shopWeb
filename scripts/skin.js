$(function(){
    var $li = $("#skin li");
    $li.click(function () {
        switchSkin(this.id);
    });
    var cookie_skin = $.cookie("MyCssSkin");
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
});

 function switchSkin(skinName){
     $("#"+skinName).addClass("selected")
         .siblings().removeClass("selected");
     $("#cssfile").attr("href","css/skin/"+skinName+".css");
     $.cookie("MyCssSkin",skinName,{path:'/',expires:10});//注：在默认情况下，只有设置cookie的网页才能读取该cookie。
     // 如果想让一个页面读取另一个页面设置的cookie，必须设置cookie的路径,expires:10:表示10天后过期
 }
