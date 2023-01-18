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
$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap2').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open2').click(function(){
        $('.popup_wrap2').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap2').fadeOut(0);
    });
});
$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap3').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open3').click(function(){
        $('.popup_wrap3').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap3').fadeOut(0);
    });
});
$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap4').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open4').click(function(){
        $('.popup_wrap4').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap4').fadeOut(0);
    });
});
$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap5').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open5').click(function(){
        $('.popup_wrap5').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap5').fadeOut(0);
    });
});
$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap6').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open6').click(function(){
        $('.popup_wrap6').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap6').fadeOut(0);
    });
});
$(function(){
    var $likeBtn =$('.icon.heart');

        $likeBtn.click(function(){
        $likeBtn.toggleClass('active');

        if($likeBtn.hasClass('active')){          
           $(this).find('img').attr({
              'src': 'https://cdn-icons-png.flaticon.com/512/803/803087.png',
               alt:'찜하기 완료'
                });
          
          
         }else{
            $(this).find('i').removeClass('fas').addClass('far')
           $(this).find('img').attr({
              'src': 'https://cdn-icons-png.flaticon.com/512/812/812327.png',
              alt:"찜하기"
           })
         }
     })
})
//수량 옵션
$(function(){
    $('._count :button').on({
        'click' : function(e){
            e.preventDefault();
            var $count = $(this).parent('._count').find('.inp');
            var now = parseInt($count.val());
            var min = 1;
            var max = 999;
            var num = now;
            if($(this).hasClass('minus')){
                var type = 'm';
            }else{
                var type = 'p';
            }
            if(type=='m'){
                if(now>min){
                    num = now - 1;
                }
            }else{
                if(now<max){
                    num = now + 1;
                }
            }
            if(num != now){
                $count.val(num);
            }
        }
    });
})
"use strict";

const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');

function color() {
    if((loginId.value.length>0 && loginId.value.indexOf("@")!==-1) 
        && loginPw.value.length>=5){
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
    }else{
        loginBtn.style.backgroundColor = "#C0DFFD";
        loginBtn.disabled = true;
    }
}

function moveToMain(){
    location.replace("./main.html");
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click',moveToMain);

