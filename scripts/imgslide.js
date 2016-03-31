$(function(){
    $("#jnBrandTab li a").click(function(){
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx = $("#jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
    var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("ul li").outerWidth();
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}

/*放大镜效果*/
$(function(){
    $('#jnBrandList li').each(function(index){
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var spanhtml = '<span style="position: absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
            $(spanhtml).appendTo(this);
    })
})

$("#jnBrandList").find(".imageMask").live("hover",function(){
    $(this).toggleClass("imageOver");
})