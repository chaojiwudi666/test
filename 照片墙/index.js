var wrapUl =$(".wrapUl");
var wrapW = parseInt(wrapUl.css('width'));
var wrapH = parseInt(wrapUl.css('height'));
console.log(wrapW);
var liW = wrapW / 5;
var liH = wrapH / 5;


createDom();
function createDom(){
    for(var i=0; i<5; i++){
        //列
        for(var j=0; j<5; j++){
            $('<li><div class="box"><img src=""></div></li>')
                .css({
                    'width':liW + 'px',
                    'height': liH + 'px',
                    'left': j*liW + 'px',
                    'top':i* liH+ 'px',
                    'transform':'rotate('+ (Math.random()*80-30) +'deg)'+'translateX('+(Math.random()*90+25)+'px) translateY('+(Math.random()*(-10)+10)+'px)' +'translateZ('+Math.random()*(50) +'px)'
                })
                .find('img').attr('src','./img/a'+(i*5+j+1)  +'.jpg')
                .end()
                .appendTo(wrapUl);
        }
    }
    bindEvent();
}
function bindEvent(){
    var change = false;
    $('li').on('click',function(){
        var bgImg = $(this).find('img').attr('src');
            var bgLeft=0;
            var bgTop=0;
        console.log(1);
        if(!change){
            
            $('li').each(function(index){
                var $this = $(this);
                $this.delay(10*index).animate({'opacity':0},200,function(){
                    $this.css({
                        'transform':'rotate(0deg)'+'translateX(0px) translateY(0px)' +'translateZ(0px)'
                    })
                    $this.find('.box').css({
                        'transform':'scale(1)'
                    })
                    $this.find('img').attr('src',bgImg).css({
                        'position':'absolute',
                        'width':wrapW + 'px',
                        'height':wrapH + 'px',
                        'left':-bgLeft,
                        'top':-bgTop
                    });
                    bgLeft += liW;
                    if(bgLeft >=wrapW){
                        bgTop+=liH;
                        bgLeft = 0;
                    }
                    $this.animate({'opacity':1},200)
                })
            })
            change = true;
        }else{
            change = false;
            $('li').each(function(index){
                var j = index%5;
                var i =Math.floor(index / 5);
                var $this = $(this);
                $(this).delay(10*index).animate({'opacity':0},100,function(){
                    $(this).find('img').css({
                        'position':'absolute',
                        'width':'100%',
                        'height':'100%',
                        'left':0,
                        'top':0
                    });
                    $this.find('img').attr('src','./img/a'+(i*5+j+1)  +'.jpg');
                    $this.css({
                        'transform':'rotate('+ (Math.random()*80-30) +'deg)'+'translateX('+(Math.random()*90+25)+'px) translateY('+(Math.random()*(-10)+10)+'px)' +'translateZ('+Math.random()*(50) +'px)'
                    })
                });
                $this.animate({'opacity':1},200)
            });

        }
        
    })
    
    
}