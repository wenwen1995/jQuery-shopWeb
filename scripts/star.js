/**
 * Created by lenovo on 2016/3/31.
 */
/*��Ʒ����Ч��*/
$(function(){
    //ͨ���޸���ʽ����ʾ��ͬ���Ǽ�
    $("ul.rating li a").click(function(){
        var title = $(this).attr("title");
        alert("��������Ʒ�������ǣ�"+title);
        var cl = $(this).parent().attr("class");
        $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
        $(this).blur();//ȥ�������ӵ����߿�
        return false;
    })
})