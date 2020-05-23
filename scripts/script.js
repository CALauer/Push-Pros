$('#load_data_btn').click(function() {
	$.ajax({
		url: 'https://aimtell.com/files/sites.json',
		type: 'GET',
		dataType: 'json',
		success: function(data, status) {
			//   console.log('Callback Successful')
			let source = document.querySelector('#pushPros').innerHTML;
			let template = Handlebars.compile(source);
			let html = template(data);
			let destination = document.querySelector('#data_table');
			destination.innerHTML = html;
		},
		error: function(data, status) {
			console.log('Callback failed');
		}
	});
});
