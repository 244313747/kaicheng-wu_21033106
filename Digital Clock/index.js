<!doctype html>
<html>
<head>

  <style type = "text/css" >
<style>
  
.wrapper{
    text-align: center;
    width: 100%;
}
.wrapper .column,
.wrapper .coln{
    display: inline-block;
    vertical-align: top;
    color: rgba(224,230,235,0.89);
    font-size: 86px;
    line-height: 86px;
    font-weight: 300;
}
.column{
    transition: all 300ms ease-in;
}
.coln{
    /* 冒号的位置 */
    transform: translateY(calc(50vh - 83px));
}
/* 以下都是不同类名对应的透明度 */
.visible{
    opacity: 1;
}
.close{
    opacity: 0.25;
}
.far{
    opacity: 0.15;
}
.distance{
    opacity: 0.05;
}
</style>
</style>
<meta charset="utf-8">
<title>Digital clock</title>
<style type="text/css">
   
html, body {
 height: 100%;
}
body {
 background: #0f3854;
 background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
 background-size: 100%;
}
p {
 margin: 0;
 padding: 0;
}
#clock {
 font-family: Arial,sans-serif;
 text-align: center;
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 color: #daf6ff;
 text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
#clock .time {
 letter-spacing: 0.05em;
 font-size: 90px;
 padding: 5px 0;
}
#clock .date {
 letter-spacing: 0.1em;
 font-size: 24px;
}
#clock .text {
 letter-spacing: 0.1em;
 font-size: 14px;
 padding: 20px 0 0;
}
  #rainBox{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
        }
   .rain{
            position: absolute;
            width: 2px;
            height: 50px;
            background: linear-gradient(rgba(255,255,255,.3),rgba(255,255,255,.6));
        }
</style>
</head>
<body>
  
<script>window.onerror = function(error, url, line) {parent.postMessage(["console", "❌ -- [ERROR] -- ❌ -- ⚠️ " + error], "*")};var cl = console.log;console.log = function () {var msg = [...arguments].join();parent.postMessage(["console", msg], "*");  }  </script><script crossorigin src="https://cdn.bootcss.com/vue/2.4.4/vue.min.js">
</script>
  
<div id="clock">
  
  <p class="date">{{ date }}</p>
  <p class="time">{{ time }}</p>
  <p class="text">Digital Clock_kaicheng wu_21033106</p>
</div>
<script type="text/javascript">
  
  
var clock = new Vue({
  el: '#clock',
  data: {
    time: '',
    date: ''
  }
});
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  var cd = new Date();
  clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
  clock.date = zeroPadding(cd.getDate(), 2) + '/' + zeroPadding(cd.getMonth()+1, 2) + '/' + zeroPadding(cd.getFullYear(), 4) + ' ' + week[cd.getDay()];
};
function zeroPadding(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}
  
  
</script>
  <div id="rainBox"></div>
  <script>
        const box=document.getElementById('rainBox');
        let boxHeight=box.clientHeight;
        let boxWidth=box.clientWidth;
        // Add raindrops at regular intervals
        setInterval(()=>{
        const rain=document.createElement('div');
        rain.classList.add('rain');
        rain.style.top=0;
        // Randomly refreshed rain locations
        rain.style.left=Math.random()*boxWidth+'px';
        // Random Rain Transparency
        rain.style.opacity=Math.random();
        box.appendChild(rain);
        // Rain falls at regular intervals
        let race=50;
        const timer=setInterval(()=>{
            if(parseInt(rain.style.top)>boxHeight){
                clearInterval(timer);
                box.removeChild(rain);
            }
            race++;
            rain.style.top=parseInt(rain.style.top)+race+'px'
        },20)
       },70)
 
</script> 
<script>
  let rain = new Audio('rain.mp3') // set audio
rain.volume = Math.random(1) *1
rain.loop = true
rain.play() // run
         
</script>
  <script>
    let mp3 = new Audio('tiktok.mp3') // set audio
mp3.volume = Math.random(1) * 0.6
mp3.loop = true
mp3.play() // run
 
</script>

</body>
</html>

