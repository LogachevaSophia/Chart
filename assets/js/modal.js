(function ($) {
    $(document).ready(function(){
        let btnTriggerModal = $('.btnTriggerModal');
        let btnCloseModal = $('.btnCloseModal');
        
        // open modal
        $(document).on('click','.btnTriggerModal',function(){
            let btnTriggerSection = $(this).attr('data-trigger-modal-section');
            $('.modal').modal();
            if(btnTriggerSection){
                $('.modal-content-section').hide();
                $('.modal-content-section[data-trigger-modal-section='+btnTriggerSection+']').show();
            }
        });
        // open modal

        // close modal 
        $(btnCloseModal).on('click',function (params) {
            $.modal.close();
        })
        // close modal
    });
})(jQuery);