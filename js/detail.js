$(function(){

// 放大图片效果
	$('.detail-con-img').hover(function(){
		$('.detail-bigger-img').show();
		$('.look-move').show();
	},function(){
		$('.detail-bigger-img').hide();
		$('.look-move').hide();
	})
	$('.detail-con-img').mousemove((function(event) {
			var x = event.pageX;
            var y = event.pageY;

            var m_L = x - $(".detail-con-img").offset().left-$(".look-move").width()/2;
            var m_T = y - $(".detail-con-img").offset().top-$(".look-move").height()/2;
            
            //判断移动后是否已经超出的范围
            //左边超出
            if( m_L< 0){ 
                 m_L= 0;
            }
            //右边超出
            if( m_L> $(".detail-con-img").width()-$(".look-move").width()){
                m_L = $(".detail-con-img").width()-$(".look-move").width();
            } 
            //顶端超出
            if(m_T < 0){
                m_T = 0;
            }
            //底部超出
            if(m_T > $(".detail-con-img").height()-$(".look-move").height()){
                m_T = $(".detail-con-img").height()-$(".look-move").height();
            }
            //设置放大区域的移动
            $(".look-move").css({
                left:m_L+"px",
                top:m_T+"px"
            });
            //设置大图片的移动   大图片的移动方向与放大区域正好相反
            $(".detail-bigger-img>img").css({
                left:(-m_L*$(".look-move").width()/$(".detail-con-img").width())*4+"px",
                top:(-m_T*$(".look-move").height()/$(".detail-con-img").height())*4+"px"
            });
		})
	)

// 选择查看图片
    $('.detail-next-ul li').hover(function(){
        // console.log(1);
        $(this).addClass('bor-org-color').siblings().removeClass('bor-org-color');
        var a=$(this).children('img').attr('src');
        $('.detail-con-img>img,.detail-bigger-img>img').attr('src',a);
    })


    $('.detail-choose-ul li .gray-box').click(function(){
        $(this).css('border-color','#f60')
        $('.detail-choose-ul li .org-box').css('border-color','#eee')
    })
    $('.detail-choose-ul li .org-box').click(function(){
        $(this).css('border-color','#f60')
        $('.detail-choose-ul li .gray-box').css('border-color','#eee')
    })

// 相关内容
    // console.log($('.box-content>div'))
    // console.log($('.product-nav-ul li'))
    $('.product-nav-ul li').click(function(){
        $(this).addClass('choosed').siblings().removeClass('choosed');
        // console.log($(this).html());
        var index=$(this).index();
        // console.log(index)
        $('.box-content>div').eq(index).show().siblings().hide();
    })

    $(window).scroll(function(){
        var h=$(window).scrollTop()
        console.log(h)
        if(h>1365){
            $('.hid-pro').show();
        }
        else{
            $('.hid-pro').hide();
        }
    })

})