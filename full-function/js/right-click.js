$(function(){
    $.contextMenu({
        selector: '.block-thumbnail',
        callback: function(key, options) {
            var m = "clicked: " + key + " on " + $(this).children('.block-name').text();
            console.log(m) ;
        },
        items: {
            "insert": {name: "Insert",icon:'insert'},
            "Favorites": {name: "Favorites",icon:'favorites'},
            "List_Layout":{name:"List Layout",icon:'listview'},
            "Block_Layout":{name:"Block Layout",icon:'blockview'}
            // "paste": {name: "Paste", icon: "paste"}
        }
    });
});
