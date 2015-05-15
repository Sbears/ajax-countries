
$(document).on('ready', function(){


$('#load-countries').on('click', function(e){
	e.preventDefault();
	$.get('/countries', function(dataFromServer){
		console.log(dataFromServer);
		for (var i = 0; i < dataFromServer.length; i++) {
			
			$('#countryList').append('<li>'+ dataFromServer[i].name + '</li>');
			
		}
	});
});

$('#submit-search').on('click', function() {
	var searchCriterea = $('#search-field').val();

	$('#search-field').val('');

	$.get('/search', {searchCriterea:searchCriterea}, function(dataFromServer) {
			console.log('dataFromServer[0].frenchName', dataFromServer[0].frenchName);
		for (var i = 0; i < dataFromServer.length; i++) {
			$('#view-search').append('<tr class="search-info"><td> <input type="checkbox" class="has-traveled"> </td><td>'  + dataFromServer[i].name + '</td><td>'  + dataFromServer[i].frenchName + '</td><td>'  + dataFromServer[i].localName + '</td><td>'  + dataFromServer[i].region + '</td></tr>' );
		}
	});
});

$(document).on('click','.has-traveled', function(){
	
});


// function toggleCheckbox(id) {
//     document.getElementById(id).checked = !document.getElementById(id).checked;
// }

// $.get('/hasTraveled', );
// $('.btn-group').on('input', 'change', function(){
//    var checkbox = $(this);
//    var label = checkbox.parent('label');
//    if (checkbox.is(':checked'))  {
//       label.addClass('active');
//    }
//    else {
//       label.removeClass('active');
//    }
// });
});