'use strict';

app.powerDataView = kendo.observable({
    onShow: function() {  
        window.screen.lockOrientation('portrait');
        
        $('div[data-url="components/productViewLVSVideo/view.html"]').children('header').show();
        $('div[data-url="components/productViewLVSVideo/view.html"]').children('footer').show();
        
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_contactsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.powerDataView.set('title', 'Power & Data');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource);
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();
// END_CUSTOM_CODE_contactsView