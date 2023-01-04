$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open').click(function(){
        $('.popup_wrap').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap').fadeOut(0);
    });
});