//数量与价格联动
$(function(){
    var $span = $(".pro_price strong");
    var price = $span.text();
    $("#num_sort").change(function(){
        var num = $(this).val();
        var amount = num * price;
        $span.text(amount);
    }).change();
})
