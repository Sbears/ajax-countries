
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

		for (var i = 0; i < dataFromServer.length; i++) {
			console.log('hasTraveled: ', dataFromServer[i].hasTraveled);
			$('#view-search').append('<tr class="search-info"><td> <input type="checkbox" id='+dataFromServer[i]._id+ ' class="has-traveled" ' + (dataFromServer[i].hasTraveled? 'checked':'' ) + '> </td><td>'  + dataFromServer[i].name + '</td><td>'  + dataFromServer[i].frenchName + '</td><td>'  + dataFromServer[i].localName + '</td><td>'  + dataFromServer[i].region + '</td></tr>' );
		}
	});
});

$(document).on('click','.has-traveled', function(){
	var checkId = $(this).attr('id');
	var hasTraveled = $(this).prop('checked');
	 console.log('id ', checkId); 
	 console.log('checked: ', hasTraveled);

	$.get('/traveled', {checkId:checkId, hasTraveled:hasTraveled}, function(results){
			console.log('results: ', results);

	});
});


});