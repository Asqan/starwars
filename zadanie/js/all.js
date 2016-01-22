$(document).ready(function () {
	$("form").on('submit', function (evt) {

	var check = $('form:checkbox:checked').length > 0;	if(document.getElementById('checkbox_trooper').checked && document.getElementById('checkbox_vader').checked) 
		{
			evt.preventDefault();
			var a = new Audio();
			a.src = 'imperial_march.mp3';
			a.play();
			
			
		
			
			
		} 
		
		else 
		{
    	return true;
		}
	});
});