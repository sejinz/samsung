
window.onload = function(){

// 주메뉴 
var gnbmenu = document.querySelectorAll('.gnb>ul>li');
var headerwrap = document.querySelector(".header_wrap");

for(var i=0; i<gnbmenu.length; i++){
    gnbmenu[i].addEventListener ('mouseover',function(){
        this.className += 'on';
        var ht = this.children[1].offsetHeight;
        headerwrap.style.height = 70 + ht + 'px';
    });

    gnbmenu[i].addEventListener('mouseout', function(){
        this.classList.remove('on');
        headerwrap.style.height = '70px'
    });
}

// 검색박스 
var srchbtn = document.querySelector('.btn_srch');
var srchclosebtn = document.querySelector('.btn_srch_close');
var srchwrap = document.querySelector('.srch_wrap');

srchbtn.addEventListener("click" , function(){
    srchwrap.className += ' on';
});

srchclosebtn.addEventListener("click" , function(){
    srchwrap.classList.remove('on');
});

// 오토배너 
var btnnext = document.querySelector('.btn_next'); 
var btnprev = document.querySelector('.btn_prev');
var slide = document.querySelectorAll('.slide');
var slideroll = document.querySelectorAll('.slide_roll li');
var btnplay = document.querySelector('.btn_play');

var bnnnum=0;
var lastnum = document.querySelectorAll('.slide_wrap > li').length -1;


// next 버튼 
btnnext.addEventListener('click', function(){
    bnnnum++;
    if(bnnnum>lastnum){bnnnum=0;}

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideroll[bnnnum].classList.add('on');
});
//prev 버튼
btnprev.addEventListener("click", function(){
    bnnnum--;
    if(bnnnum < 0) bnnnum = lastnum;

    slide.forEach(function(item){ 
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on')
    });
    slideroll[bnnnum].classList.add('on');
});

// 오토배너 
function autobanner(){
    bnnnum++;
    if(bnnnum>lastnum){bnnnum=0;}

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[bnnnum].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideroll[bnnnum].classList.add('on');
}
var autobnn = setInterval(autobanner,5000);

// 배너 재생 멈춤 버튼 
var flag=true;
btnplay.addEventListener('click', function(){
    if(flag){
        clearInterval(autobnn);
        this.classList.add('on');
        flag=false;
    }else{
        autobnn = setInterval(autobanner,5000);
        this.classList.remove('on');
        flag=true;
    }
});
// 롤링버튼 클릭 
slideroll.forEach(function(item){
    item.addEventListener('click', rollAction);
});
function rollAction(item){
    curroll = item.currentTarget; //클릭이벤트가 전달된 엘리먼트
    parentroll = curroll.parentElement; //연결된 엘리먼트의 부모
    childroll = parentroll.children; //부모 엘리먼트의 자식 엘리먼트 
    curidx = Array.from(childroll).indexOf(curroll); //연결된 엘리먼트의 인덱스

    slide.forEach(function(item){
        item.classList.remove('active');
    });
    slide[curidx].classList.add('active');

    slideroll.forEach(function(idx){
        idx.classList.remove('on');
    });
    slideroll[curidx].classList.add('on');
    bnnnum = curidx;
}

//top 버튼
var btntop = document.querySelector('.top');

window.addEventListener('scroll', function(){
    var scroll = document.querySelector('html').scrollTop;
    console.log(scroll);

    if(scroll <= 0){
        btntop.classList.remove("on","ab");
    }else if(scroll > 0 && scroll < 2700){
        btntop.classList.remove("ab");
        btntop.classList.add("on");
    }else{
        btntop.classList.add("ab");
    }
});

btntop.addEventListener('click', function(e){
e.preventDefault();
window.scroll({
    top:0,
    left: 0,
    behavior: 'smooth'
    });
});


}