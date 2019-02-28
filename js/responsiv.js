$(function (){
   nbrFormItem = $('.form_wizard .form_item').length;
   $('.form_wizard .steps_header .progress .progress-bar').css('width',100/nbrFormItem+'%');
   nbrStep = 0;
   $('.nxt_step').click(function (){
        if(nbrStep < nbrFormItem-1)
            nbrStep = nbrStep + 1;
        if(nbrStep == nbrFormItem-1){
            $('.form_wizard footer .nxt_step').hide();
            $('.form_wizard footer .submit_btn').show();
        }
        $('.form_wizard .steps_header .progress .progress-bar').width(0);
        $('.form_wizard .steps_header .progress .progress-bar').
                css('width',(100/nbrFormItem)*(nbrStep+1)+'%');
        
        $('.form_wizard header .step_item > div').eq(nbrStep).removeClass('step_item_disable');
        $('.form_wizard header .step_item > div').eq(nbrStep).addClass('step_item_activ');
        
        $('.form_wizard .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_item').eq(nbrStep).fadeIn(700);
        });
   });
   
   $('.pre_step').click(function (){
       if(nbrStep > 0)
            nbrStep = nbrStep - 1;
            $('.form_wizard footer .nxt_step:hidden').show();
            $('.form_wizard footer .submit_btn:visible').hide();
        $('.form_wizard .steps_header .progress .progress-bar').width(0);
        $('.form_wizard .steps_header .progress .progress-bar').
                css('width',(100/nbrFormItem)*(nbrStep+1)+'%');
        
        $('.form_wizard header .step_item > div').eq(nbrStep + 1).removeClass('step_item_activ');
        $('.form_wizard header .step_item > div').eq(nbrStep + 1).addClass('step_item_disable');
        
        $('.form_wizard .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_item').eq(nbrStep).fadeIn(700);
        });
   });
});