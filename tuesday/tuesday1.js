var page = document.getElementById('page');

document.body.addEventListener('mousemove',function(e){
    page.style.top = e.pageY - 50;
    page.style.left = e.pageX - 50;
});
