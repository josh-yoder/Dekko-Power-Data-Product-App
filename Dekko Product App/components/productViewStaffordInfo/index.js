'use strict';

app.productViewStaffordInfo = kendo.observable({
    onShow: function() {
        //window.screen.lockOrientation('portrait');
    },
    afterShow: function() {}
});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productViewStaffordInfo.set('title', 'Ashley Duo System Information');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource); 
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();