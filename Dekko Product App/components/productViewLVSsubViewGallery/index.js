'use strict';

app.productViewLVSsubViewGallery = kendo.observable({
    onShow: function() {
        window.screen.lockOrientation('portrait');
        
        if($('.lvs-slider').hasClass('slick-initialized')) {
            $('.lvs-slider').slick('unslick');
        }
    },
    afterShow: function() {
        $('div[data-url="components/productViewLVSsubViewGallery/view.html"]').children('header').show();
        $('div[data-url="components/productViewLVSsubViewGallery/view.html"]').children('footer').show();
        $('.lvs-slider').slick({
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
    app.productViewLVSsubViewGallery.set('title', 'Low Voltage System Gallery');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource);
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();