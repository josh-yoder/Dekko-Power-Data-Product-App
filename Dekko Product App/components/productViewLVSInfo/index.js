'use strict';

app.productViewLVSInfo = kendo.observable({
    onShow: function() {
        window.screen.lockOrientation('portrait');
        
        $('div[data-url="components/productViewLVSInfo/view.html"]').children('header').show();
        $('div[data-url="components/productViewLVSInfo/view.html"]').children('footer').show();
    },
    afterShow: function() {}
});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productViewLVSInfo.set('title', 'Low Voltage System Information');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource);
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();