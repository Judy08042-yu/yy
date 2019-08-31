$(function(){
	$('.last-li').click(function(){
		var more=$('.sel-more-txt').html()
		console.log(more)
		if(more=='更多选项'){
			$('.sel-more-txt').html('收起选项');
			$('.selected-more').css('background-position','0px -51px')
			$('.hidden-li').show();
		}
		if(more=='收起选项'){
			$('.sel-more-txt').html('更多选项');
			$('.selected-more').css('background-position','')
			$('.hidden-li').hide();
		}
	})

	var proNum=$('.products-list-ul li').length;
	$('.products-num').html(proNum)

	$('.sel-header-form .kind').click(function(event) {
		$(this).siblings('.all-selected').css('color','')
		$(this).siblings('.all-selected').removeClass('selected');
		$(this).siblings('.all-selected').children('span').css('background-position','-262px -101px');
		if($(this).hasClass('selected')){
			$(this).css('color','');
			$(this).removeClass('selected')
			$(this).children('span').css('background-position','-262px -101px');
		}
		else{
			$(this).css('color','#0092d8');
			$(this).addClass('selected')
			$(this).children('span').css('background-position','-242px -101px');
		}
	});
	$('.sel-header-form .all-selected').click(function(){
		var a=$(this).siblings('.kind').length;
			// console.log(a);
		$(this).siblings('.kind').each(function(){
			console.log($(this).siblings('.kind').hasClass('selected'))
			if($(this).siblings('.kind').hasClass('selected')){
				a--;		
			}
		})
		if(a==0||a==1){
			$(this).css('color','#0092d8').siblings('.kind').css('color','');
			$(this).addClass('selected').siblings('.kind').removeClass('selected')
			$(this).children('span').css('background-position','-242px -101px').parent().siblings('.kind').children('span').css('background-position','-262px -101px');
		}
	})

// 登录模块
	$('.shop-car').click(function(){
		$('.login-model').show();
	})
	$('.wr').click(function() {
		$('.login-model').hide();
	});
	$('.L-a').click(function(){
		$('.acct1').hide();
		$('.reg-box').show();
	})
	$('.logined').click(function(){
		$('.acct1').show();
		$('.reg-box').hide();
	})
// 价格高低查看
	// $('.price-order').hover(function(){
	// 	console.log(0)
	// 	$('.price-hid-box').show();
	// },function(){
	// 	$('.price-hid-box').hide();
	// })

})