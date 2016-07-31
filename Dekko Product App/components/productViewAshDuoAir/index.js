'use strict';

app.productViewAshDuoAir = kendo.observable({
    onShow: function() {
        //window.screen.lockOrientation('portrait');
    },
    afterShow: function() {}
});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productViewAshDuoAir.set('title', 'Ashley Duo Air');
})();