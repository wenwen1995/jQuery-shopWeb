//���Խ���ѡ��л�
$(function(){
    var $div_li = $("div.tab_menu ul li");
    $div_li.click(function(){
        $(this).addClass("selected")//��ǰ<li>Ԫ�ظ���
            .siblings().removeClass("selected");//ȥ������ͬ��<li>Ԫ�صĸ���
         var index = $div_li.index(this);//��ȡ����ǰ�����<li>Ԫ����ȫ��<li>Ԫ���е�����ֵ

        $("div.tab_box>div")//ѡȡ�ֽڵ�
            .eq(index).show()//��ʾ<li>Ԫ�ض�Ӧ��<div>Ԫ��
            .siblings().hide();//������������ͬ����<divԪ��>
    }).hover(function(){
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    })
})