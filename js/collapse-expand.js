document.getElementById('iconCaretUp').onclick = function(){
	var settingIcon = document.getElementById('iconSetting');
	var searchIcon = document.getElementById('iconSearch');
	var pallet = document.getElementById('pallet');
	hideIcon(settingIcon);
	hideIcon(searchIcon);
	collapsePallet(pallet);

};

function hideIcon(icon){
	if(icon.style.display == 'none'){
		icon.style.display ='inline';
	}else{
		icon.style.display ='none';
	}
}
function collapsePallet(pallet){
	if(pallet.style.height=='28px'){
		//expand the pallet
		pallet.style.height ='306px';
	}else{
		//collapse the pallet
		pallet.style.height = '28px';
	}

}
