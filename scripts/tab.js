//属性介绍选项卡切换
$(function(){
    var $div_li = $("div.tab_menu ul li");
    $div_li.click(function(){
        $(this).addClass("selected")//当前<li>元素高亮
            .siblings().removeClass("selected");//去掉其他同辈<li>元素的高亮
         var index = $div_li.index(this);//获取到当前点击的<li>元素在全部<li>元素中的索引值

        $("div.tab_box>div")//选取字节点
            .eq(index).show()//显示<li>元素对应的<div>元素
            .siblings().hide();//隐藏其他几个同辈的<div元素>
    }).hover(function(){
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    })
})