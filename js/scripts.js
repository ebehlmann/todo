$(document).ready(function() {
	$('form#new-list').submit(function(event) {
		event.preventDefault();
		
		var listNameInput = $('input#new-list-name').val();
		var newList = { name: listNameInput, tasks: [] };
		
		$('ul#list-of-lists').append('<li class="list">' + newList.name + '</li>');
		
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
				
				$('input#new-task-name').val('');
			});
		});
	});
	
	
});