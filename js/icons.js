var	hamburberIcon = document.getElementById( 'iconHamburger' ),
	caretUpIcon = document.getElementById( 'iconCaretUp' );


function toggleHamburgerIcon () {
  	hamburberIcon.classList.toggle('close');
}
hamburberIcon.addEventListener('click', toggleHamburgerIcon);


function toggleCaretUpIcon(){
	caretUpIcon.classList.toggle('collapsed');
}
caretUpIcon.addEventListener('click',toggleCaretUpIcon);