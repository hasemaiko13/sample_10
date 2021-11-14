$(function(){
	var count = 0;
	$({count: count}).animate({count: count+100}, {
		duration: 3000,
		easing: 'swing',
		progress: function() { 
			$('#countup span').text(Math.ceil(this.count)); 
		},
		complete:function(){
			$('#countup').fadeOut();
			$('#anime_second').fadeIn();
			$('.pad1').addClass("active");
			$('.pad2').addClass("active");
    }
	});
	
 });