//实现图片放大效果
$(function(){
   var options ={
     zoomType:'standard',//另一个值是reverse,表示是否将原图用半透明图层遮罩
       lens:true,/*默认值true,若为false,则不在原图显示镜头*/
       preloadImages:false,/*布尔值，表示是否重新加载大图像*/
       alwaysOn:false,
       zoomWidth:340,/*默认值为200，放大窗口的宽度*/
       zoomHeight:340,/*默认值为200，放大窗口的高度*/
       xOffset:10,/*默认值：10，放大窗口相对于原图的x轴偏移值，可以为负*/
       yOffset:0,/*默认值：0，放大窗口相对于原图的y轴偏移值，可以为负*/
       position:'right'/*默认值：’right’，放大窗口的位置，值还可以是:’right’ ,’left’ ,’top’ ,’bottom’*/
};
 $(".jqzoom").jqzoom(options);
});