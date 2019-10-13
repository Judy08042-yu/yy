$(function(){

// 侧边栏显示
	// console.log($('.main-side-box'));
	$('.main-side-ul li').hover(function(){
		// console.log($(this).index());
		a=$(this).index();
		// $(this).css('background-color','rgba(0,0,0,0.7)').siblings().css('background-color','');
		$('.main-side-box').eq(a).removeClass('box-static').siblings('.main-side-box').addClass('box-static');
		return false;
	},function(){	
		$('.main-side,.main-side-box').hover(function(){
			// console.log(1)
			$('.main-side-box').eq(a).removeClass('box-static');
		},function(){
			$('.main-side-box').eq(a).addClass('box-static');
		});
	})
// 轮播图
	$('.main-lunbo').hover(function(){
		$('.main-lunbo>span').css('display','block');
		return false;
	},function(){
		$('.main-lunbo>span').css('display','');
		return false;
	})

	$('.main-icon-L').hover(function(){
		$(this).css('background-position','-171px -127px')
	},function(){
		$(this).css('background-position','')
	})
	$('.main-icon-R').hover(function(){
		$(this).css('background-position','-233px -127px')
	},function(){
		$(this).css('background-position','')
	})

	var num=0;
	var timer;
	var n=0;
	function lunbo(){
		clearInterval(timer);
		timer=setInterval(function(){
		num=num+1;
		if(num==4){
			n=0;
			$('.main-dot ol li').eq(n).addClass('dot-current-color').siblings('').removeClass('dot-current-color');
		}
		if(num>4){
			num=0;
			$('.main-lunbo-ul').css('margin-left',-1200*num+'px');
			num=1;
		}
		$('.main-dot ol li').eq(num).addClass('dot-current-color').siblings('').removeClass('dot-current-color');
		$('.main-lunbo-ul').animate({'margin-left':-1200*num+'px'},500)
		},5000)
	}

	lunbo();	
	$('.main-lunbo').hover(function(){
		clearInterval(timer);
	},function(){
		lunbo();
	})

	$('.main-icon-L').click(function(){
		num--;
		if(num<0){
			num=4;
			$('.main-lunbo-ul').css('margin-left',-1200*num+'px');
			num=3;
		}
		$('.main-lunbo-ul').animate({'margin-left':-1200*num+'px'},500)
		$('.main-dot ol li').eq(num).addClass('dot-current-color').siblings('').removeClass('dot-current-color');
	})

	$('.main-icon-R').click(function(){
		num++;
		if(num==4){
			n=0;
			$('.main-dot ol li').eq(n).addClass('dot-current-color').siblings('').removeClass('dot-current-color');
		}
		if(num>4){
			num=0;
			$('.main-lunbo-ul').css('margin-left',-1200*num+'px');
			num=1;
		}
		$('.main-dot ol li').eq(num).addClass('dot-current-color').siblings('').removeClass('dot-current-color');
		$('.main-lunbo-ul').animate({'margin-left':-1200*num+'px'},500)
	})

	$('.main-dot-ol li').hover(function(){
		console.log($(this).index())
		clearInterval(timer);
		$(this).addClass('dot-current-color').siblings('').removeClass('dot-current-color');
		num=$(this).index();
		$('.main-lunbo-ul').animate({'margin-left':-1200*num+'px'},500);
	},function(){
		timer=setInterval(lunbo,1000);
	})

// 返回顶部
	$('.bottom-side-ul li').eq(3).click(function(){
		$('html,body').animate({'scrollTop':0}, 500)
	})

})
