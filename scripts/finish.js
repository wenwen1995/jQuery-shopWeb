?/**
 * Created by lenovo on 2016/3/31.
 */
/*���չ������*/
$(function(){
    var $product = $(".jnProDetail");
    $("#cart a").click(function (e) {
        var pro_name = $product.find("h4:first").text();
        var pro_size = $product.find(".pro_size strong").text();
        var pro_color =  $(".color_change strong").text();
        var pro_num = $product.find("#num_sort").val();
        var pro_price = $product.find(".pro_price strong").text();
        var dialog = "��л���Ĺ���\n������Ĳ�Ʒ�ǣ�"+pro_name+"��"+
            "�ߴ��ǣ�"+pro_size+"��"+
            "��ɫ�ǣ�"+pro_color+"��"+
            "�����ǣ�"+pro_num+"��"+
            "�ܼ��ǣ�"+pro_price +"Ԫ��";
       alert(dialog);
        return false;//����ҳ����ת
    });
})