'use strict';

app.productViewLVSVideo = kendo.observable({
    onShow: function() {
        $('div[data-url="components/productViewLVSVideo/view.html"]').children('header').hide();
        $('div[data-url="components/productViewLVSVideo/view.html"]').children('footer').hide();
    },
    afterShow: function() {
        window.plugins.html5Video.initialize({'lvsVideo': 'test.mp4'});
        
        window.plugins.html5Video.play("lvsVideo");
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