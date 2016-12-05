'use strict';

app.productViewAsh202UnderInstallCorded = kendo.observable({
    onShow: function() {
        window.screen.lockOrientation('portrait');
        //cordova.InAppBrowser.open('test.pdf', '_blank');
    },
    afterShow: function() { 
         
    
    //    PDFJS.workerSrc = '/scripts/pdf.worker.js'; 

    //// Fetch the PDF document from the URL using promises.
    //    PDFJS.getDocument('/components/productViewAsh202UnderUnderAirBrochure/test.pdf').then(function (pdf) {
    //    // Fetch the page.
    //    pdf.getPage(1).then(function (page) {
    //      var scale = 0.75;
    //      var viewport = page.getViewport(scale);

    //      // Prepare canvas using PDF page dimensions.
    //      var canvas = document.getElementById('viewer');
    //      var context = canvas.getContext('2d');
    //      canvas.height = viewport.height;
    //      canvas.width = viewport.width;

    //      // Render PDF page into canvas context.
    //      var renderContext = {
    //        canvasContext: context,
    //        viewport: viewport
    //      };
    //      page.render(renderContext); 
    //    });
    //});


    }
});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.productViewAsh202UnderInstallCorded.set('title', 'Ashley 202 Under System Install Instructions - Corded');
    
    //var dataSource = new kendo.data.DataSource({
    //    data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
    //});
    //app.contactsView.set('dataSource', dataSource); 
    
    //app.contactsView.set('alert', function (e) { alert(e.data.name); });
})();