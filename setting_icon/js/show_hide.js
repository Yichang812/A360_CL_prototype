var isCollapsed;

// document.getElementById('iconCaretUp').onclick = function(){
// 	var settingIcon = document.getElementById('iconSetting');
// 	var searchIcon = document.getElementById('iconSearch');
// 	var pallet = document.getElementById('pallet');
// 	hideShow(settingIcon);
// 	hideShow(searchIcon);
// 	collapseExpand(pallet);

// };
document.getElementById('iconSetting').onclick = function(){
	var settingMenu = document.getElementById('level_1');
	if(settingMenu.style.display == 'none'){
		settingMenu.style.display ='inherit';
	}else{
		settingMenu.style.display ='none';
	}
};


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
