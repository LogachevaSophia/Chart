(function ($) {
    $(document).ready(function () {
        // datas
        let selects = $('.select2');
        let optionForCommonSelect = {
            placeholder: 'Выберите значение',
            width: '100%',
        };

        // select2
        $(selects).select2(optionForCommonSelect);
        // select2
    });
})(jQuery);