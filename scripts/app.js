var clearSelected = function() {
	$('.menu li').removeClass('selected');
};	

//setup crossroads
crossroads.addRoute('about', function() {
	$('.content').load(window.location.pathname + './views/about.html');
	clearSelected();
	$('.about').addClass('selected');
});
crossroads.addRoute('contact', function() {
	$('.content').load(window.location.pathname + './views/contact.html');
	clearSelected();
	$('.contact').addClass('selected');
});
crossroads.addRoute('work', function() {
	$('.content').load(window.location.pathname + './views/work.html');
	clearSelected();
	$('.work').addClass('selected');
});
crossroads.addRoute('work/{id}', function(id) {
	$('.content').load(window.location.pathname + './views/work/' + id + '.html');
	clearSelected();
	$('.work').addClass('selected');
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
hasher.setHash('work');

// Hamburger menu
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross, .menu-item" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});




