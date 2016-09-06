var box = document.getElementById('box');

document.body.addEventListener('mousedown', function(){
    box.style.backgroundColor = '#' + Math.random().toString(16).substr(2,6);
});

document.body.addEventListener('mouseup', function(){
    box.style.backgroundColor = '#' + Math.random().toString(16).substr(2,6);
});
