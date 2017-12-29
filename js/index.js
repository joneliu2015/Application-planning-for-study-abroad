//乐语弹窗
function openWin() {
    window.open('http://chat.looyuoms.com/chat/chat/p.do?c=20002134&f=10071643&g=10068659&site=15890&refer=biaoji&loc=biaoji', '', 'height=500, width=800,top=200, left=300,  toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
};

window.onload = function () {
    // “返回顶部按钮”显示隐藏
    var clientHeight = document.documentElement.clientHeight;
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= clientHeight) {
            $('.toTop').show();
        } else {
            $('.toTop').hide();
        }
    };
    //点击返回顶部
    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    //底部二维码显示效果
    $('.wechat').mouseenter(function () {
        $('.qrwechat').show()
    });
    $('.weibo').mouseenter(function () {
        $('.qrweibo').show()
    })
    $('.wechat').mouseleave(function () {
        $('.qrwechat').hide()
    });
    $('.weibo').mouseleave(function () {
        $('.qrweibo').hide()
    })
    // 加载数据部分
    var data;
    $.ajax({
        dataType: 'json',
        url: 'data.json',
        data: data,
        type: 'get',
        success: function (data, key) {
            var jsArr = data;
            for (var key in jsArr) {};
            console.log(jsArr);
            $("body").on("click", ".country>li", function (e) {
                //获取当前tab中鼠标停在的table栏的索引  
                var index = $(this).index();
                console.log(index);
                //根据这个索引切换，下面的展示  
                $(".country>li").eq(index).addClass("active").siblings().removeClass("active");
                //获取当前点击项目的ID
                var indexI = $(this).index();
                var obj = {
                    items: jsArr.country[indexI]
                };
                var result = template('template', obj);
                $('section').html('');
                $('nav').after(result);

                $('.center').on('click', '.center_title>span', function (e) {
                    var index2 = $(this).index();
                    console.log(index2);
                    $(".center_title>span").eq(index2).addClass("active2").siblings().removeClass("active2");
                    $(".center_title>span").eq(index2).addClass("change").siblings().removeClass("change");
                    $(".center_content>img").eq(index2).show();
                    $(".center_content>img").eq(index2).siblings().hide()
                });
                $(".grade").trigger('click')
            });
            $('#Americia').trigger('click');
        }
    })
}