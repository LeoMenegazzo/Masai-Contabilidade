$(function(){
	
	$(window).scroll(function(){
		if($(this).scrollTop()>30){
			$('.lm-header').each(function(){
				$(this).addClass("lm-header_fixo")
			}
		)}else{
			$('.lm-header').each(function(){
				$(this).removeClass("lm-header_fixo")
			})
		};
	});
	$(window).scroll();
	
	AOS.init();

	$(".wq-btn-redes-sociais").click(function () {
        $(".wq-contatos_cloud-text").toggleClass("hideCloud");
        $(".wq-contatos_popup-items").toggleClass("VerPopup");
    });
	
});
