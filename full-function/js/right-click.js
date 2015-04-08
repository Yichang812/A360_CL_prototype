$(function(){
    $.contextMenu({
        selector: '.block-thumbnail',
        callback: function(key, options) {
            var m = "clicked: " + key + " on " + $(this).children('.block-name').text();
            console.log(m) ;
            if(key=="Block_Layout"){
                $('.block-thumbnail').css({'width':'90px','height':'90px','float':'left'});
            }else if(key=="List_Layout"){
                $('.block-thumbnail').css({'width':'','height':'68px','float':''});
            }
        },
        items: {
            "insert": {name: "Insert",icon:'insert'},
            "Favorites": {name: "Favorites",icon:'favorites'},
            "List_Layout":{name:"List Layout",icon:'listview'},
            "Block_Layout":{name:"Block Layout",icon:'blockview'}
        }
    });
});
