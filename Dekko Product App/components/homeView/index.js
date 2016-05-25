'use strict';

app.homeView = kendo.observable({
    onShow: function() {
        if($('.home-slider').hasClass('slick-initialized')) {
            $('.home-slider').slick('unslick');
        }
        //
    },
    afterShow: function() {
        //Homescreen slider 
        $('.home-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            fade: true,
            arrows: false,
            draggable: false,
            swipeToSlide: true,
            waitForAnimate: true,
            speed: 700
        });
    }
});

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.homeView.set('title', 'Home');
})();
// END_CUSTOM_CODE_homeView