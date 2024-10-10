(function ($) {
    $(document).ready(function () {
        let optionForHtml2Pdf = {
            margin: 1,
            filename: 'dashbord-scan.pdf',
            image: { 
                type: 'jpeg', 
                quality: 0.98 
            },
            html2canvas: { 
                scale: 1,
            },
            jsPDF: { 
                unit: 'in', 
                format: 'a3', 
                orientation: 'landscape',
            }
        }
        $('.btnMakePdf').on('click', function () {
            let areaToConverToPdf = document.querySelector(".tabs-content-block.active");
            html2pdf(areaToConverToPdf, optionForHtml2Pdf);
        });
    });
})(jQuery);