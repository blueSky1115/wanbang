$(function(){


    // banner模块
    (function(){

        var banner = $('#banner');
        var oUl = banner.find('.bannertu');
        var oChoose = banner.find('.choose');
        var arrImg = ['./img/banner1.png', './img/banner2.png', './img/banner3.png', './img/banner4.png'];
        // 生成节点
        
        for (var i = 0; i < arrImg.length; i++) {
            var oLi = $('<li></li>').css('backgroundImage', 'url('+arrImg[i]+')');
            var cLi = $('<li></li>');
            oUl.append(oLi);
            oChoose.append(cLi);
        }
        oUl.find('li').eq(0).css('z-index', 1);
        oChoose.find('li').eq(0).addClass('active');
        oChoose.find('li').on('click', function(){
            var index = $(this).index();
            oUl.find('li').hide();
            oChoose.find('li').removeClass('active');
            oUl.find('li').eq(index).fadeIn();
            $(this).addClass('active');
        })

        
    })();

    //遮罩层
    (function () {
        var oDiv = $('.anli');
        var oList =oDiv.find('ul li');

        oList.mouseenter(function () {
            $(this).find('.mm').fadeIn();
        });
        oList.mouseleave(function () {
            $(this).find('.mm').fadeOut();
        })
    })();
    //遮罩层
    
    

});