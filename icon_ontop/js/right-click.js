$(function(){
    $.contextMenu({
        selector: '.block-thumbnail', 
        callback: function(key, options) {
            var m = "clicked: " + key + " on " + $(this).children('.block-name').text();
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "insert": {name: "Insert",icon:'insert'},
            "Favorites": {name: "Favorites",icon:'favorites'}
            // "paste": {name: "Paste", icon: "paste"}
        }
    });
});