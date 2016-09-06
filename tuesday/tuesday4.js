var outerbox = document.getElementById('outerbox');
var innerbox = document.getElementById('innerbox');

function changeBox(box){
    box.addEventListener('click', function(e){
        box.style.backgroundColor = '#' + Math.random().toString(16).substr(2,6);
        e.stopPropagation(e);
    });
}

changeBox(outerbox);
changeBox(innerbox);
