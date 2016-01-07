'use strict'
$(document).ready(function(){

	$('body').on('click','a',function(){

		var recupattr=$(this).attr("href");
		$('.cible').hide();
		$(recupattr).show();
	});

	$('#carre1').velocity({
    	translateX: '+=1200' // position
		}, 3000);		// durre en second parametre 	

	$('#carre2').velocity({
    	translateX: '+=1200'
		}, 3000);
	

	$('#carre2').velocity({
    	rotateZ: "360deg"
		},{
		queue: false,
		duration: 3000});
			
	
	$('#carre3').velocity({
		translateX: '+=1200',
		opacity: '1'
		},3000);

	$('#carre4').velocity({
		width:'85%'
		},3000);

	$('#carre4').velocity({
		width: '100px',
		translateX: '+=1200'},{
			
		duration: 3000});


});