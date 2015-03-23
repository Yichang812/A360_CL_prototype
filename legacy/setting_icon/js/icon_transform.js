var	hamburberIcon = document.getElementById( 'iconHamburger' ),
	caretUpIcon = document.getElementById( 'iconCaretUp' ),
	searchIcon = document.getElementById('iconSearch'),
	cancelIcon = document.getElementById('iconCancel'),
	searchBar = document.getElementById('searchBar');


function toggleHamburgerIcon () {
  	hamburberIcon.classList.toggle('close');
}
hamburberIcon.addEventListener('click', toggleHamburgerIcon);


function toggleCaretUpIcon(){
	caretUpIcon.classList.toggle('collapsed');
}
caretUpIcon.addEventListener('click',toggleCaretUpIcon);

function toggleSearchIcon(){
	searchBar.classList.toggle('show');
}
searchIcon.addEventListener('click',toggleSearchIcon);
cancelIcon.addEventListener('click',toggleSearchIcon);