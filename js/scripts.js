$(document).ready(function() {
	$('form#new-list').submit(function(event) {
		event.preventDefault();
		
		var listNameInput = $('input#new-list-name').val();
		var newList = { name: listNameInput, tasks: [] };
		
		$('ul#list-of-lists').append('<li class="list">' + newList.name + '</li>');
		
		$('input#new-list-name').val('');
		
		$('li.list').last().click(function() {
			$('#list-container').show();
			$('#list-container h2').text(newList.name);
			$('#list-container span').text(newList.name);
		});
	});
	
	
});