//ʵ��ͼƬ�Ŵ�Ч��
$(function(){
   var options ={
     zoomType:'standard',//��һ��ֵ��reverse,��ʾ�Ƿ�ԭͼ�ð�͸��ͼ������
       lens:true,/*Ĭ��ֵtrue,��Ϊfalse,����ԭͼ��ʾ��ͷ*/
       preloadImages:false,/*����ֵ����ʾ�Ƿ����¼��ش�ͼ��*/
       alwaysOn:false,
       zoomWidth:340,/*Ĭ��ֵΪ200���Ŵ󴰿ڵĿ��*/
       zoomHeight:340,/*Ĭ��ֵΪ200���Ŵ󴰿ڵĸ߶�*/
       xOffset:10,/*Ĭ��ֵ��10���Ŵ󴰿������ԭͼ��x��ƫ��ֵ������Ϊ��*/
       yOffset:0,/*Ĭ��ֵ��0���Ŵ󴰿������ԭͼ��y��ƫ��ֵ������Ϊ��*/
       position:'right'/*Ĭ��ֵ����right�����Ŵ󴰿ڵ�λ�ã�ֵ��������:��right�� ,��left�� ,��top�� ,��bottom��*/
};
 $(".jqzoom").jqzoom(options);
});