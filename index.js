var timer;
var per = 0;
timer = setInterval(function(){
    $(".bar").css("width", per + "%");
    per +=1;
    if(per > 100){
        $(".page-loading").addClass("over");
        clearInterval(timer);
        setTimeout(function(){
            $('.moster-text').html("<h2>we are monster</h2>");
        },3000);
       
    }
},30)