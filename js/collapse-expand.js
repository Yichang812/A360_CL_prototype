var caretUpIcon = document.getElementById('iconCaretUp');
	//pallet = document.getElementByClassName('pallet');

caretUpIcon.onclick = function(){
	if(document.getElementById('iconSetting').style.display=='none'){
		document.getElementById('iconSetting').style.display='inline';
		document.getElementById('iconSearch').style.display='inline';
	}else{
		document.getElementById('iconSetting').style.display='none';
		document.getElementById('iconSearch').style.display='none';
	}
	
};

// function hideIcon(icon){
// 	if(icon.style.display=='none'){
// 		icon.style.display=='block';
// 		console.log("searchIcon"+searchIcon.style.display);
// 	}else{
// 		icon.style.display=='none';
// 	}
// }