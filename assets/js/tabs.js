(function ($) {
    $(document).ready(function(){
        $(document).on('click','.tabs-triggers-list-item',function(){
            let tabsButtons = $('.tabs-triggers-list-item'),
                tabsContents = $('.tabs-content-block');
            let currentTabName = $(this).attr('data-tab-name');
            let currentTabPopupName = $(this).attr('data-popup-name');
            if($(this).hasClass('active')){
                
                $('.tabs-triggers-list-item-container .popup').removeClass('active');
                $('.popup[data-popup-name='+currentTabPopupName+']').addClass('active');
                $('.popup.active[data-popup-name='+currentTabPopupName+']')[0].style.left = this.offsetLeft+"px"
            }
            $(tabsButtons).removeClass('active');
            $(tabsContents).removeClass('active');
            $(this).addClass('active');
            $('.tabs-content-block[data-tab-name='+ currentTabName +']').addClass('active');
        });
    });
})(jQuery);