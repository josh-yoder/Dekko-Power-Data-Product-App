'use strict';

app.productViewLVSVideo = kendo.observable({
    onShow: function() {
        //$('div[data-url="components/productViewLVSVideo/view.html"]').children('header').hide();
        //$('div[data-url="components/productViewLVSVideo/view.html"]').children('footer').hide();
    },
    afterShow: function() {
        window.plugins.html5Video.initialize({'lvsVideo': 'lvsvideo525new.mp4'}); 
        window.plugins.html5Video.play("lvsVideo");
     
      
        $('#lvsVideo').on('play', function(){
        
            //$('#lsVideo').css('width', 'auto');
            window.screen.lockOrientation('landscape');
            $('div[data-url="components/productViewLVSVideo/view.html"]').children('header').hide();
            $('div[data-url="components/productViewLVSVideo/view.html"]').children('footer').hide();
        });
        $('#lvsVideo').on('ended', function(){
            //$('#lsVideo').css('width', '100%');
            
            var elem = document.getElementById("lvsVideo");
            if (elem.exitFullscreen) {
              elem.exitFullscreen();
            } else if (elem.msExitFullscreen) {
              elem.msExitFullscreen(); 
            } else if (elem.mozExitFullScreen) {  
              elem.mozRequestFullScreen();
            } else if (elem.webkitExitFullscreen) {
              elem.webkitExitFullscreen(); 
            } 
             
            window.screen.lockOrientation('portrait');
            
            $('div[data-url="components/productViewLVSVideo/view.html"]').children('header').show();
            $('div[data-url="components/productViewLVSVideo/view.html"]').children('footer').show();
        });
    }
});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productViewLVSVideo.set('title', 'Low Voltage System');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource);
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
    
    
    
})();