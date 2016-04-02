//setup crossroads
crossroads.addRoute('about', function() {
	$('.content').load('../views/about.html');
});
crossroads.addRoute('contact', function() {
	$('.content').load('../views/contact.html');
});
crossroads.addRoute('work', function() {
	$('.content').load('../views/work.html');
});
crossroads.addRoute('work/{id}', function(id) {
	$('.content').load('../views/work/' + id + '.html');
});

crossroads.routed.add(console.log, console); //log all routes

//setup hasher
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
}
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change

//update URL fragment generating new history record
// hasher.setHash('work');
