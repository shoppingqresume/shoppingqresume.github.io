$(document).ready(function () {
    // 返回首頁
    $(window).on('scroll', function (e) {
        var scroll_top = window.scrollY;
        // console.log(scroll_top);
      
        if (scroll_top > 80) {
            $('.backtoTop').fadeIn(500);
        } else {
            $('.backtoTop').fadeOut(500);
        }
    })
    $('.backtoTop a').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        }, 700);  //會跟html：scroll-behavior互相衝突
    })
    
    
    /////// 分頁 ///////
    var btns = document.querySelectorAll('.btn');
    var contents = document.querySelectorAll('.content')

    for (let i = 0; i < btns.length; i++) {
      const index = i;
      const btn = btns[i]
      const content = contents[i]

      btns[i].onclick = function () {
        // console.log(index);

        remove_active();

        btn.classList.add('active');
        content.classList.add('active');
      }
    }
    function remove_active() {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
        contents[i].classList.remove('active');
      }
    }
    

    //skill detail收合
    $(".certificate").on("click",".certificateArea > li > span",function(e){
        e.preventDefault();
        $(this).parent().find('.detail').slideToggle();
        $(this).parent().siblings().find('.detail').slideUp();
    })

});