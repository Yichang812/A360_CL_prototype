var menuRight = document.getElementById( 'category-list' ),
	hamburgerIcon = document.getElementById( 'iconHamburger' ),
	body = document.querySelector('div.side-menu-push');

			
hamburgerIcon.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'side-menu-push-toleft' );
};
