var isCollapsed;

document.getElementById('iconCaretUp').onclick = function(){
	var settingIcon = document.getElementById('iconSetting');
	var searchIcon = document.getElementById('iconSearch');
	var pallet = document.getElementById('pallet');
	hideShow(settingIcon);
	hideShow(searchIcon);
	collapseExpand(pallet);

};
// document.getElementById('iconSearch').onclick = function(){
// 	var searchBubble = document.getElementById('searchBubble');
// 	if(isCollapsed==true){
// 		searchBubble.style.display = 'none';
// 	}
// 	hideShow(searchBubble);

// }


function hideShow(icon){
	if(icon.style.display == 'none'){
		icon.style.display ='inline';
	}else{
		icon.style.display ='none';
	}
}
function collapseExpand(pallet){
	if(pallet.style.height=='24px'){
		//expand the pallet
		pallet.style.height ='306px';
		isCollapsed = false;
	}else{
		//collapse the pallet
		pallet.style.height = '24px';
		isCollapsed = true;
	}

}
