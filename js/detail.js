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
    $('.product-nav-ul li').click(function(){
        $(this).addClass('choosed').siblings().removeClass('choosed');
        var index=$(this).index();
        $('.box-content>div').eq(index).show().siblings().hide();
    })

    $(window).scroll(function(){
        var h=$(window).scrollTop()
        if(h>1365){
            $('.hid-pro').show();
        }
        else{
            $('.hid-pro').hide();
        }
    })

// 倒计时
    function endTime(){
        $('.endingTime').each(function(){

            // 获取到结束时间title
            var end=$(this).prop("title");
            var gTime=new Date();
            // 获取到当前时间
            var nowTime=gTime.getTime();
            // 获取结束时间
            var endTime=new Date(end).getTime();
            console.log(endTime)
            // 获得结束时间距离现在的秒数
            var time_over=endTime-nowTime;

            var timer;
            if(time_over>=0){
                // 获得倒计时的天数
                var over_day=Math.floor(time_over/86400000)
                time_over-=over_day*86400000;

                var over_hour=Math.floor(time_over/3600000);
                time_over-=over_hour*3600000;

                var over_minute=Math.floor(time_over/60000);
                time_over-=over_minute*60000;

                var over_second=Math.floor(time_over/1000);

                if(over_day<10){
                    over_day='0'+over_day;
                }
                if(over_hour<10){
                    over_hour='0'+over_hour;
                }
                if(over_minute<10){
                    over_minute='0'+over_minute;
                }
                if(over_second<10){
                    over_second='0'+over_second;
                }
                 $(this).html(over_day + "天" + over_hour + "时" + over_minute + "分" + over_second + "秒");
            }else{
                 clearInterval(timer);
                 $(this).html('00天00时00分00秒');
            }
        })
        timer=setTimeout(endTime,1000);
    }
    endTime();

})