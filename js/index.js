$(function () {
	$(window).scroll(function() {
		if($(window).scrollTop() >= 100) {
			$(".cofpany-fadeInUp").addClass("fadeInUp");
//			setTimeout(function(){
//				$(".cofpany-fadeInUp").removeClass("fadeInUp");
//			},2000);
			$(".cofpany-fadeInLeftBig").addClass("fadeInLeftBig");
			$(".cofpany-fadeInRightBig").addClass("fadeInRightBig");
		}
	})
})
//导航栏下拉菜单........................................导航栏下拉菜单
$(function () {
	var _width =  $(document.body).width();
	if (_width>768) {
		$('li.dropdown').mouseover(function() {
			$(this).addClass('open');
		})
		$('li.dropdown').mouseout(function() {
			$(this).removeClass('open');
		});
	}
})
//常见问题收缩选项卡....................................................常见问题收缩选项卡
$(function(){
	$(".service-question ul li").click(function() {
		$(this).addClass("current").siblings().removeClass("current");
		var i=$(this).index(".service-question ul li");
		$('.service-question ul div').eq(i).slideDown().siblings('.service-question ul div').slideUp();
	})
})
$(function (){
	$(".product-cont ul a").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		var i=$(this).index(".product-cont ul a");
		$('.product-img').eq(i).slideDown().siblings('.product-img').slideUp();
	})
})
//	回到顶部.............................................................回到顶部开始
$(function () {
	$(window).scroll(function() {
		if($(window).scrollTop() >= 600) {
			$('#toTop').fadeIn(700);
		} else {
			$('#toTop').fadeOut(700);
		}
	})
	$("#toTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});
})
