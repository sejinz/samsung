$(document).ready(function(){

// 주메뉴 풀다운 
    $("nav.gnb>ul>li>a").mouseover(function(){
        var ht =$(this).next().height();

        $(".header_wrap").stop().animate({"height":70+ht},500,"linear");

        $(".gnb > ul > li > div").css("display","none");
        $(this).next().css("display","block");
    });
    $(".gnb").mouseleave(function(){
        $(".header_wrap").stop().animate({"height":"70px"},300,"linear");
        $(this).find("div").css("display","none");
    });

// 검색 버튼 
$(".btn_srch").click(function(){
    $(".srch_wrap").css("display","block");
});
$(".btn_srch_close").click(function(){
    $(".srch_wrap").css("display", "none");
});

// 오토배너 
var $bnnNum=0;
var $lastNum=$(".slide_wrap>li").size()-1;

//next 버튼
var $bnnNum = 0;
var $lastNum = $(".slide_wrap > li").size() - 1;

$(".btn_next").click(function(){
    $bnnNum++;
    if($bnnNum > $lastNum) $bnnNum = 0;
    $(".main_visual > ul > li").removeClass("active");
    $(".main_visual > ul > li").eq($bnnNum).addClass("active");

    if( $(".main_visual > ul > li").eq($bnnNum).hasClass("active") ){
        $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
    }else{
        $(".slide_roll > ul > li").removeClass("on");
    }

    $(".slide_roll > ul > li").removeClass("on");
    $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
});

//prev 버튼
$(".btn_prev").click(function(){
    $bnnNum--;
    if($bnnNum < 0) $bnnNum = $lastNum;
    $(".main_visual > ul > li").removeClass("active");
    $(".main_visual > ul > li").eq($bnnNum).addClass("active");

    if( $(".main_visual > ul > li").eq($bnnNum).hasClass("active") ){
        $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
    }else{
        $(".slide_roll > ul > li").removeClass("on");
    }

    $(".slide_roll > ul > li").removeClass("on");
    $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
});


// 오토배너
function autoBanner(){
    $bnnNum++;
    if($bnnNum > $lastNum) $bnnNum = 0;
    
    $(".main_visual > ul > li").removeClass("active");
    $(".main_visual > ul > li").eq($bnnNum).addClass("active");
    
    if( $(".main_visual > ul > li").eq($bnnNum).hasClass("active") ){
        $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
    }else{
        $(".slide_roll > ul > li").removeClass("on");
    }

    $(".slide_roll > ul > li").removeClass("on");
    $(".slide_roll > ul > li").eq($bnnNum).addClass("on");
};

var $autoBnn = setInterval(autoBanner,5000);

//배너 재생 멈춤
var flag = true;
$("a.btn_play").click(function(e){
    e.preventDefault();
    if(flag){
        clearInterval($autoBnn);
        $(this).addClass("on");
        flag = false;
    }else{
        $autoBnn = setInterval(autoBanner,5000);
        $(this).removeClass("on");
        flag = true;
    }
});
// 롤링버튼
$(".slide_roll li a").click(function(e){
    e.preventDefault();
    var rollNum = $(this).parent().index();

    $(".slide").removeClass("active");
    $(".slide").eq(rollNum).addClass("active");

    $(".slide_roll>ul>li").removeClass("on");
    $(".slide_roll>ul>li").eq(rollNum).addClass("on");
});

//top 버튼
$(window).scroll(function(){
    var scroll = $(this).scrollTop();

    if(scroll <= 0){
        $(".btn_top").removeClass("on ab");
    }else if(scroll > 0 && scroll < 2700){
        $(".btn_top").removeClass("ab");
        $(".btn_top").addClass("on");
    }else{
        $(".btn_top").addClass("ab");
    }
});

$(".btn_top").click(function(){
    $("html,body").stop().animate({"scrollTop":0},1400,"swing")
});
});