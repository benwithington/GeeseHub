$(document).ready(function () {
    console.log("loaded");
    
    $(document).keydown(function(e) {
         if(e.which == 68) {
            moveright();
         };
    });
    $(document).keydown(function(e) {
         if(e.which == 65) {
            moveleft();
         };
    });
    $(document).keydown(function(e) {
         if(e.which == 87) {
            moveup();
         };
    });
    $(document).keydown(function(e) {
         if(e.which == 83) {
            movedown();
         };
    });
    $(document).keyup(function(e) {
         if(e.which == 68||e.which == 83||e.which == 87||e.which == 65) {
            clearmove();
         };
    });
    
    });