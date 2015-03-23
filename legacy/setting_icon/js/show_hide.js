var isCollapsed;

document.getElementById('iconCaretUp').onclick = function(){
	var settingIcon = document.getElementById('iconSetting');
	var searchIcon = document.getElementById('iconSearch');
	var pallet = document.getElementById('pallet');
	hideShow(settingIcon);
	hideShow(searchIcon);
	collapseExpand(pallet);

};


// document.getElementById('iconSetting').onclick = function(){
// 	var tier1_menu = document.getElementById('tier1_menu');
// 	//var tier1 = document.querySelectorAll('.tier1');
// 	hideShowBlock(tier1_menu);
// 	//hideShowBlock(tier1);
// };


function hideShow(icon){
	if(icon.style.display == 'none'){
		icon.style.display ='inline';
	}else{
		icon.style.display ='none';
	}
}

// function hideShowBlock(icon){
// 	if(icon.style.display == 'none'){
// 		icon.style.display ='block';
// 	}else{
// 		icon.style.display ='none';
// 	}
// }

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
