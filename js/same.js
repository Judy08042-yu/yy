$(function(){
	// phone
	$('.box-R3').hover(function(){
		$('.phone-box').show();
	},function(){
		$('.phone-box').hide();
		$('.box-R3,.phone-box').hover(function(){
			$('.phone-box').show();
		},function(){
			$('.phone-box').hide();
		});
	})

	// shopping 
	$('.box-R2').hover(function(){
		$('.shopping-car').show();
	},function(){
		$('.shopping-car').hide();
		$('.box-R2,.shopping-car').hover(function(){
			$('.shopping-car').show();
		},function(){
			$('.shopping-car').hide();
		});
	})

	// login
	$('.box-R1').hover(function(){
		$('.login').show();
	},function(){
		$('.login').hide();
		$('.box-R1,.login').hover(function(){
			$('.login').show();
		},function(){
			$('.login').hide();
		});
	})

	// form
	$('.box-R4').mouseenter(function(){
		$('.header-box-form').show();
		$('.inputbox').animate({width:'210px'},500);
	})
	$('.inputbox').blur(function() {
		// console.log(1)		
		$('.header-box-form').hide();
		$('.inputbox').animate({width:'44px'},500);		
	});

// bottom
	$('.bottom-side-ul li:nth-child(1)').hover(function(){
		$(this).children().children('span').css({
			'background-position':'0px -38px',
		})
		$(this).children('a').removeClass('ani-img');
	},function(){
		$(this).children().children('span').css({
			'background-position':'',
		})
		$(this).children('a').addClass('ani-img');
	})
	$('.bottom-side-ul li:nth-child(2)').hover(function(){
		$(this).children().children('span').css({
			'background-position':'-37px -38px'
		})
	},function(){
		$(this).children().children('span').css({
			'background-position':'',
		})
	})
	$('.bottom-side-ul li:nth-child(3)').hover(function(){
		$('.bottom-img').show();
	},function(){
		$('.bottom-img').hide();
	})
	$('.bottom-side-ul li:nth-child(4)').hover(function(){
		$(this).children().children('span').css({
			'background-position':'-75px -38px'
		})
	},function(){
		$(this).children().children('span').css({
			'background-position':'',
		})
	})
})