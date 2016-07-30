 window.onload = function(){
         var banner = document.getElementById('banner');
         var list = document.getElementById('list');
         var buttons = document.getElementById('buttons').getElementsByTagName('span');
         var prev = document.getElementById('prev');
         var next = document.getElementById('next');
         var animated=false;
         var timer;

         //无限轮播
         var index = 1;
         function showButton(){
            for(var i=0;i<buttons.length;i++){
                if(buttons[i].className=='on'){
                    buttons[i].className='';
                    break;
                }
            }
            buttons[index-1].className='on';
         }

         //轮播图调用函数
         function animate(offset){
            animated=true;
            var newLeft = parseInt(list.style.left)+offset;
            var time = 500;  //位移总时间
            var interval = 10;  //位移间隔时间
            var speed = offset/(time/interval);  //每次位移量
            function go(){
                if((speed<0&&parseInt(list.style.left)>newLeft)||(speed>0&&parseInt(list.style.left)<newLeft)){
                    list.style.left=parseInt(list.style.left)+speed+'px';
                    setTimeout(go,interval);
                }else{
                    animated=false; 
                    list.style.left = newLeft+'px';

                    if(newLeft > -1349){
                     list.style.left = -4047+'px';
                    }
                    if(newLeft < -4047){
                       list.style.left = -1349+'px';
                    }
                }
            }
            go();
         }
           
           //自动播放
         function play(){
            timer=setInterval(function(){
                next.onclick();
            },3000);

         }
         function stop(){
            clearInterval(timer);
         }

         //箭头切换
         next.onclick = function(){
            if(index == 3){
                index=1;
            }else{
                index+=1;
            }
            showButton();
            if(!animated){
              animate(-1349);
            }
         }
         prev.onclick = function(){
            if(index == 1){
                index=3;
            }else{
                index-=1;
            }
            showButton();
            if(!animated){
            animate(1349);
            }
         }

         //按钮切换
         for(var i=0;i<buttons.length;i++){
            buttons[i].onclick=function(){
                if (this.className=='on'){
                    return;
                }
               var myIndex=parseInt(this.getAttribute('index'));
               var offset=-1349*(myIndex-index);
               index=myIndex;
               showButton();
               if(!animated){
                 animate(offset);
               }             
            }
         }
         banner.onmouseover = stop;
         banner.onmouseout = play;
         play();



//信息滚动条
/*    var area=document.getElementById("info_ns");
    area.innerHTML+=area.innerHTML;//复制一份div
    var half=area.scrollHeight/2;
    var b=true;//通过该变量来判断是否运动
    (function(){
    var sp=area.scrollTop%60;//对div的scrollTop取模，判读什么时候停顿      
    var isScroll=sp&&!b;//sp如果大于零则为true否则为false.这时候isScroll始终是fasle,因为b为true，如果不这样设置isScroll的话，当isScroll大于零时就不会执行下面的代码也就不会运动了
    if(!isScroll){
            if(area.scrollTop==half){//如果scrollTop等于half时则将scrollTop重置为零形成无缝滚动
                area.scrollTop=0;
            }
            area.scrollTop+=1;//自加,以便形成动画效果
        }
        if(area.scrollTop%60){//如果没有滚到第几条信息时
            setTimeout(arguments.callee,10);
        }
        else{//如果刚好滚到第几条信息
            setTimeout(arguments.callee,2000);
        }
        
    })();*/



      }







