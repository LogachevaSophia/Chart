// (function ($) {
//     $(document).ready(function(){
//         let popupsTriggers = $('.popupTrigger');
//         $(popupsTriggers).on('click',function(){
//             let currentPopupName = $(this).attr('data-popup-name');
//             let neededPopup = $('.popup[data-popup-name='+ currentPopupName +']');
//             if($(neededPopup).hasClass('active')){
//                 $(neededPopup).removeClass('active');
//                 $(this).removeClass('active');
//             }else{
//                 $(neededPopup).addClass('active');
//                 $(this).addClass('active');
//             }
//         });
//         $(document).on('mouseup','body',function(e){
//             let popupTriggerParent = $(e.target).closest('.popupTrigger'),
//                 popupBodyParent = $(e.target).closest('.popup');
//             if ($(popupTriggerParent).length == 0 && $(popupBodyParent).length == 0) {
//                 $('.popup').removeClass('active');
//                 $('.popupTrigger').removeClass('active');
//             }
//         });
//     });
// })(jQuery);