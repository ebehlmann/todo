$(document).ready(function() {
	$('form#new-list').submit(function(event) { // create a list object
		event.preventDefault();
		
		var listNameInput = $('input#new-list-name').val();
		var newList = { name: listNameInput, tasks: [] };
		var uniqueList = newList.name.toLowerCase();
		
		$('ul#list-of-lists').append('<li class="list list-group-item" id=' + uniqueList + '>' + newList.name + '<span class="badge">' + newList.tasks.length + '</span>' + '</li>');
		
		$('input#new-list-name').val('');
		
		$('li.list').last().click(function() {
			$('#list-container').show();
			$('#list-container ul li').remove();
			$('#list-container h2').text(newList.name);
			$('#list-container span').text(newList.name);

			newList.tasks.forEach(function(task) {
				$('#list-container ul').append('<li>' + task.name + '</li>');
			});
			
			$('form#new-task').off();
			$('form#new-task').submit(function(event) {
				event.preventDefault();
				
				var taskNameInput = $('input#new-task-name').val();
				var newTask = { name: taskNameInput };
				
				newList.tasks.push(newTask);
				
				$('#list-container ul').append('<li>' + newTask.name + '</li>');
				
				// var selectBadge = "#" + newList.name.toLowerCase() + " .badge";
				var selectBadge = "#" + uniqueList + " .badge";
				
				$(selectBadge).empty();
				$(selectBadge).text(newList.tasks.length);
				
				$('input#new-task-name').val('');
			});
		});
	});
	
	
});