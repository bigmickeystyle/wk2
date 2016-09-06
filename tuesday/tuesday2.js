var i = 0;
var elem = document.querySelector('textarea');
elem.addEventListener('input', function(){
    var length = elem.value.length;
    elem.value = getty.slice(0, length);
});
