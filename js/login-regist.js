$(function(){
	$('.mes-log').click(function(){
		var log=$('.mes-log').html();
		console.log(1);
		if(log=='短信验证登录'){
			$('.mes-log').html('账号密码登录');
			$('.message-log').show();
			$('.acct-num-log').hide();
		}
		if(log=='账号密码登录'){
			$('.mes-log').html('短信验证登录');
			$('.message-log').hide();
			$('.acct-num-log').show();
		}
	})
	$('.regPhone').click(function(){
		$('.log-box').hide();
		$('.reg-box').show();
	})
	$('.logined').click(function(){
		$('.log-box').show();
		$('.reg-box').hide();
	})
	$('.agrement-icon').click(function(){
		if($('.agrement-icon').hasClass('agreed')){
			$('.agrement-icon').removeClass('agreed');
			$('.agrement-icon').css('background-position','-242px -101px');
			$('.disagreed').hide();
		}
		else{
			$('.agrement-icon').addClass('agreed');
			$('.agrement-icon').css('background-position','-262px -101px')
		}
	})

// 短信验证
	$('#log-btn2').click(function(){
		var getPhone3=$('#phone3').val();
		var getMP2=$('#MP2').val();
		if(getPhone3==''||getPhone3.length!=11||!reg.test(getPhone3)){
			$('.warn-phone3').show();
			$('.warn-phone3').html("请输入正确的手机号");
		}
		if(getMP2.length==''){
			$('.warn-MP2').show();
			$('.warn-MP2').html('短信验证码错误');
		}
	})


// 账号密码登录验证
	// 手机号表达式
	var reg=/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
	$('#log-btn').click(function(){		
		var getPhone1=$('#phone1').val();
		var getPd=$('#pd').val();

		// 手机号码验证
		if(getPhone1==''||getPhone1.length!=11||!reg.test(getPhone1)){
			$('.warn-phone1').show();
			$('.warn-phone1').html("请输入正确的手机号");
		}

		// 密码
		if($('#pd').val()==''){
			// alert('短信密码为空')
			$('.warn-pd1').show();
			$('.warn-pd1').html("请输入用户密码");
		}
		else{
			if(getPd.length<6||getPd.length>20){
				$('.warn-pd1').show();
				$('.warn-pd1').html("密码长度必须在6到20为之间");
			}
		}
	})

	$('#phone1').focus(function(){
		$('.warn-phone1').hide();
	})
	$('#phone2').focus(function(){
		$('.warn-phone2').hide();
	})
	$('#phone3').focus(function(){
		$('.warn-phone3').hide();
	})
	$('#Pd3').focus(function(){
		$('.warn-pd3').hide();
	})
	$('#pd').focus(function(){
		$('.warn-pd1').hide();
	})
	$('#MP').focus(function(){
		$('.warn-MP').hide();
	})
	$('#MP2').focus(function(){
		$('.warn-MP2').hide();
	})
	$('#Pd2').focus(function(){
		$('.warn-pd2').hide();
	})

// 注册验证
	$('#reg-btn').click(function(){
		var getPhone2=$('#phone2').val();
		var getMP=$('#MP').val();
		var getPd2=$('#Pd2').val();
		var getPd3=$('#Pd3').val();
		// 短信验证码
		if(getMP.length==''){
			$('.warn-MP').show();
			$('.warn-MP').html('短信验证码错误');
		}
		else{
			return false;
		}
		// 密码表达式
		var regPd=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/;
		
		// 手机号码
		if(getPhone2==''||getPhone2.length!=11||!reg.test(getPhone2)){
			// alert('手机号不能为空')
			$('.warn-phone2').show();
			$('.warn-phone2').html("请输入正确的手机号");
		}

		// 密码
		if(getPd2==''){
			$('.warn-pd2').show();
			$('.warn-pd2').html("请输入用户密码");
		}
		else if(getPd2.length<6||getPd2.length>20){
			$('.warn-pd2').show();
			$('.warn-pd2').html("密码长度必须在8到20为之间");
		}
		else if(getPd2.length>=6&&getPd2.length<=20){
			if(!regPd.test(getPd2)){
				$('.warn-pd2').show();
				$('.warn-pd2').html("密码必须包含大小写字母，数字，符号至少三种");
			}
		}

		// 确认密码
		if(getPd3==''){
			$('.warn-pd3').show();
			$('.warn-pd3').html("请输入用户密码");
		}
		else if(getPd3.length<6||getPd3.length>20){
			$('.warn-pd3').show();
			$('.warn-pd3').html("密码长度必须在8到20为之间");
		}
		else if(getPd3.length>=6&&getPd3.length<=20){
			if(!regPd.test(getPd3)){
				$('.warn-pd3').show();
				$('.warn-pd3').html("密码必须包含大小写字母，数字，符号至少三种");
			}
			else if(getPd3!=getPd2){
				$('.warn-pd3').show();
				$('.warn-pd3').html("两次输入的密码不一致");
				if(getPd2==''){
					$('.warn-pd2').show();
					$('.warn-pd2').html("请输入用户密码");
				}
				else{
					$('.warn-pd2').hide();
				}
			}
		}	

		// 同意协议
		if($('.agrement-icon').hasClass('agreed')){
			$('.disagreed').show();
			$('.disagreed').html("未同意用户注册协议");
		}
		else{
			$('.disagreed').hide();
		}
	})
})