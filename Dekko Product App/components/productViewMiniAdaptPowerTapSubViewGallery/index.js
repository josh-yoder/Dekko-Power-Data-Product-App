'use strict';

app.productViewMiniAdaptPowerTapSubViewGallery = kendo.observable({
    onShow: function() {
        window.screen.lockOrientation('portrait');
        if($('.miniTap-slider').hasClass('slick-initialized')) {
            $('.miniTap-slider').slick('unslick');
        }
    },
    afterShow: function() {
        $('.miniTap-slider').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            infinite: true,
            arrows: false,
            draggable: false,
            swipeToSlide: true,
            waitForAnimate: true,
            speed: 400
        });
    }
});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productViewMiniAdaptPowerTapSubViewGallery.set('title', 'Mini Adapt Power Tap Gallery');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource);
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();