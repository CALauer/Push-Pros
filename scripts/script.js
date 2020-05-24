
$( document ).ready(function() {
	// Handler for .ready() called.

function getData() { //Gets the data from the JSON URL
    return $.ajax({
        url : 'https://aimtell.com/files/sites.json',
        type: 'GET'
    });
}
getData().done(initialize); // Initialize the connection

function initialize (data) { // Loads the table headings
	let siteData = 
	'{{#each sites}}{{#if @last}}{{#each this}}<th class="border-bottom">{{@key}}</th>{{/each}}{{/if}}{{/each}}'
	let source = document.querySelector('#pushPros').innerHTML
	let template = Handlebars.compile(siteData)
	let html = template(data)
	let destination = document.querySelector('#data1')
	destination.innerHTML = html
}

function loadDataTable(data) { // Input the data into the data
	 let siteData = 
	  '{{#each sites}}{{#if @last}}{{#each this}}<th class="border-bottom">{{@key}}</th>{{/each}}{{/if}}{{/each}}'
	  + '{{#each sites}}<tr><td class="font-weight-bold border-bottom">{{id}}</td>'
			+ '<td class="border-bottom">{{uid}}</td><td class="border-bottom">'
			+ '<a id ="show_url"href="{{url}}">Here</a></td>'
			+ '<td class="border-bottom">{{name}}</td>'
			+ '<td class="border-bottom"><a href="{{icon}}">View Icon</a></td>'
			+ '<td class="border-bottom">{{promptId}}</td>'
			+ '<td class="border-bottom">{{webPushID}}</td>'
			+ '<td class="border-bottom">{{auto_prompt}}</td>'
			+ '<td class="border-bottom">{{createdAt}}</td>'
			+ '<td class="border-bottom">{{active}}</td></tr>{{/each}}'
      let source = document.querySelector('#pushPros').innerHTML
      let template = Handlebars.compile(siteData)
	  let html = template(data)
      let destination = document.querySelector('#data1')
      destination.innerHTML = html
}
// Actions
$('#load_data_btn').click(function () { 
	getData().done(loadDataTable) // Call to receive and add data to table
})
});