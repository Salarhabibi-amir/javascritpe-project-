
const cursor = document.querySelector('.cursor')
var timeout;
 document.addEventListener('mousemove',function(e){
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display= 'block';
    //stop animation
    function mouseStopped(){
        cursor.style.display = 'none'
    }
    //hide animation
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped,1000);

 });
 //stop animation of the screen
 document.addEventListener('mouseout',function(){
    cursor.style.display= 'none'
 })
 