/*Ϊ���¶�̬������ӵ���ʾ��ǩ*/
$(function(){
    var x = 10;
    var y =20;
    $("a.tooltip").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";//����divԪ��
        $("body").append(tooltip);//׷�ӵ��ĵ���
        $("#tooltip").css({
            "top": (e.pageY + y) + "px",
            "left":(e.pageX + x) +"px"
        }).show("fast");
    }).mouseout(function(){
        this.title = this.myTitle;
        $('#tooltip').remove();//�Ƴ�
    }).mousemove(function(e){
        $("#tooltip").css({
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"
        });
    });
})
