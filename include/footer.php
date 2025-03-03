<div class="footer site-section" id="contact">
<div class="container">
<div class="row">
<div class="col-md-3">
<div class="site-logo-footer">
<a href="/">WebWork</a>
</div>
</div>
<div class="col-md-8 ml-auto">
<div class="row">
<div class="col-md-4 ml-auto">
<ul class="list-unstyled links">
<li><a href="#callback" onclick="ShowWindow('WinTimer', this);" class="nav-link">Обратная связь со мной</a></li>
<li><a href="javascript:alert('Лучше напишите в telegram, быстрее отвечу!')" class="nav-link"><span class="__cf_email__" data-cfemail="9cf8f9f9f1f7fdefe8f9eedcfbf1fdf5f0b2fff3f1">[email&#160;protected]</span></a></li>
<li><a href="https://t.me/d33mk4" target="_blank" class="nav-link">https://t.me/d33mk4</a></li>
</ul>
</div>
<div class="col-md-4">
<ul class="list-unstyled links">
<li><a href="#home-section" class="nav-link">В начало</a></li>
<li><a href="#services" class="nav-link">Сервисы</a></li>
<li><a href="#projects" class="nav-link">Проекты</a></li>
<li><a href="#reviews" class="nav-link">Отзывы</a></li>
<li><a href="#blog" class="nav-link">Блог</a></li>
<li><a href="#contact" class="nav-link">Контакты</a></li>
</ul>
</div>
<div class="col-md-4">
</div>
</div>
</div>
</div>
</div>
</div>
<div class="site-section">
<div class="container">
<div class="row mb-4 text-center">
<div class="col">
<a href="https://t.me/d33mk4" target="_blank"><span class="m-2 fa fa-telegram"></span></a>
<a href="https://vk.com/d33mk45" target="_blank"><span class="m-2 fa fa-vk"></span></a>
<a href="javascript:alert('В настоящее время не пользуюсь skype. Пишите в telegram или на e-mail.')"><span class="m-2 fa fa-skype"></span></a>
</div>
</div>
<div class="row mt-5 justify-content-center">
<div class="col-md-7 text-center">
<p>&copy; <script>document.write(new Date().getFullYear());</script> Все права защищены | Сделано <i class="icon-heart text-danger" aria-hidden="true"></i> Дмитрием Олеговичем Сердюковым

</p>
</div>
</div>
</div>
</div>
	<a href="#home" class="scrollTop " title="Наверх страницы" ><i class="fa fa-angle-up" aria-hidden="true"></i></a>
	<a href="#contact" class="scrollBot " title="В низ страницы" ><i class="fa fa-angle-down" aria-hidden="true"></i></a>
</div>
<script data-cfasync="false" src="/js/email-decode.min.js"></script>
<script src="/js/jquery-3.3.1.min.js"></script>
<script>jQuery.migrateMute = true;</script>
<script src="/js/jquery-migrate-3.0.0.js+popper.min.js.pagespeed.jc.ZLqp_fiROr.js"></script><script>eval(mod_pagespeed_qyUnU4ydWp);</script>
<script>eval(mod_pagespeed_Jj13ZmUOoa);</script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/owl.carousel.min.js+jquery.sticky.js+jquery.waypoints.min.js+jquery.animateNumber.min.js.pagespeed.jc.qCjvTrHEyd.js"></script><script>eval(mod_pagespeed_byJKBBcfWp);</script>
<script>eval(mod_pagespeed_VgPCYyGcGD);</script>
<script>eval(mod_pagespeed_1Mu4JoLbZ6);</script>
<script>eval(mod_pagespeed_mqW62LKx4D);</script>
<script src="/js/jquery.fancybox.min.js+jquery.stellar.min.js+jquery.easing.1.3.js.pagespeed.jc.vduuwb7_q-.js"></script><script>eval(mod_pagespeed_lIz4VCgqKW);</script>
<script>eval(mod_pagespeed_VXV1ypFXBf);</script>
<script>eval(mod_pagespeed_ZtARSFv96s);</script>
<script src="/js/bootstrap-datepicker.min.js+isotope.pkgd.min.js+aos.js.pagespeed.jc.HypNX7vEf5.js"></script><script>eval(mod_pagespeed_km5HGwQsW0);</script>
<script>eval(mod_pagespeed_wnWjjM6x_K);</script>
<script>eval(mod_pagespeed_KMCBI8wU8h);</script>
<script src="/js/typed.js"></script>
<script>
if( $('.typed-words').length )         // use this if you are using id to check
{
var typed = new Typed('.typed-words', {
	strings: ["Интернет-магазины","Лэндинги","Приложения", "Бизнес-процессы"],
	typeSpeed: 80,
	backSpeed: 80,
	backDelay: 4000,
	startDelay: 1000,
	loop: true,
	showCursor: true
});
}
</script>
<script src="/js/main.js"></script>
<script type='text/javascript' src="/js/jquery.maskedinput.min.js"></script>
<script>
$(document).ready(function(){
	$("input[name=phoneWinTimer]").mask("+7 (999) 999-9999");
});
function ShowWindow(name, anchor) {
	$(".formError").css("visibility", "hidden");
	$(".formError").css( "display", "none");
	////console.log('id='+name+'Box');
	document.getElementById(name+'Box').style.display='table';
	document.getElementById(name+'Fon').style.display='block';
	document.getElementById(name+'BoxCont').style.display='inline-block';
	var href=$(anchor).attr('href')
	//console.log(href)
	//$('#DivInputTimer')
	//$('#DivInputTimer').append("<input type='text'/>");
	// append input control at end of form
	//$("<input type='text' value='' />").attr("name", "service").attr("value", href).addClass("form-number-one").prop('readonly', true).appendTo("#DivInputTimer");
	if ( href == '#price0')
		$("<input type='text' value='' />").attr("name", "service").attr("value", "Узнать цены").addClass("form-number-one").prop('readonly', true).insertAfter("#DivInputTimer input[name=emailWinTimer]");
	else if ( href == '#price1')
		$("<input type='text' value='' />").attr("name", "service").attr("value", "Узнать стоимость разработки").addClass("form-number-one").prop('readonly', true).insertAfter("#DivInputTimer input[name=emailWinTimer]");
	else if ( href == '#price2')
		$("<input type='text' value='' />").attr("name", "service").attr("value", "Оценить стоимость доработок").addClass("form-number-one").prop('readonly', true).insertAfter("#DivInputTimer input[name=emailWinTimer]");
	else if ( href == '#price3')
		$("<input type='text' value='' />").attr("name", "service").attr("value", "Оценить стоимость улучшений").addClass("form-number-one").prop('readonly', true).insertAfter("#DivInputTimer input[name=emailWinTimer]");
	else if ( href == '#price5')
		$("<input type='text' value='' />").attr("name", "service").attr("value", "Узнать цену и срок").addClass("form-number-one").prop('readonly', true).insertAfter("#DivInputTimer input[name=emailWinTimer]");
	else if ( href == '#callback')
		$("<input type='text' value='' />").attr("name", "service").attr("value", "Обратная связь").addClass("form-number-one").prop('readonly', true).insertAfter("#DivInputTimer input[name=emailWinTimer]");

}
function CloseWindow(name) {
	document.getElementById(name+'Box').style.display='none';
	document.getElementById(name+'Fon').style.display='none';
	//document.getElementById(name+'BoxCont').QuestBoxCont.style.display='none';	
}
function sendWinTimer() {
	$(".formError").css("visibility", "hidden");
	var data = {};
	$("#dataTimer").find("input, textearea, select").each(function() {									
		data[this.name] = $(this).val();
	});
	$("#DivResultTimer").html('<center><img src="/img/loader.gif" class="loaderImg"/></center>');
	$(".formError").css( "display", "none");
	$.ajax({								
		url: "/form/mail.php",
		method: "POST",
		dataType: "html",
		data: data, 
		success: function(data){
			var obj = jQuery.parseJSON(data);										
			if (obj.error == 1) {
				//console.log(obj.id);
				$("#phoneWinTimerError").css("display", "block");
				$("#phoneWinTimerError").css("visibility", "visible");
				$("#phoneWinTimerError").html(obj.text);
				$("#DivResultTimer").html("");											
			}
			else  {
				//ym(88278879,'reachGoal','discount');		
				$("#DivResultTimer").html(obj.text);
				$("#DivInputTimer").css( "display", "none");
			}
		},
		error: function (jqXHR, exception) {
			$("#DivResultTimer").html(exception.text);
			$("#DivInputTimer").css( "display", "none");
		}
	});
}
</script>
<link rel="stylesheet" type="text/css" href="/css/form.css">
<div class="window_fon" onclick="CloseWindow('WinTimer');" id="WinTimerFon"></div>
<div class="window_box izv"  id="WinTimerBox">
	
	<div class="window-cont" id="WinTimerBoxCont">
		<div class="cont-spec-order">
			<div class="spec-order-img"><img src="/img/spec-order-img.png" alt=""></div>
			<div onclick="CloseWindow('WinTimer');" align="right" class="close-x"><img src="/img/close_box.gif" border=0></div>	
		</div>
		<div class="dop-form-contact">
			<div class="cont-tab-col-cont form-contact-col-2"> 
			<form method="POST" name="sendForm" id="dataTimer">
			<input type="hidden" name="act" value="send">
				<h2>Получите скидку до 50% (от 500 руб./час)</h2>
				<p>При заказе выбранного сервиса</p>
				<div id="DivInputTimer">
					<input name="fio" placeholder="Ваше имя" type="text" class="form-number-one"> 
					<input name="phoneWinTimer" placeholder="Контактный телефон*" type="text" class="form-number-one phone" required>
					<input name="emailWinTimer" placeholder="Контактный e-mail" type="text" class="form-number-one email" >
					<div id="phoneWinTimerError" class="formError"></div>
					<button name="" type="button" onclick="sendWinTimer()" class="button-callback">Получить скидку</button>
				</div>
				<div id="DivResultTimer"></div>
			 </div>
			</form>
		</div>
	</div>		
</div>	

</body>
</html>