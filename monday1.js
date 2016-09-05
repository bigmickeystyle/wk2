function boldItalUnder(sel) {
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.fontWeight = 'bold';
        nodes[i].style.fontStyle = 'italic';
        nodes[i].style.textDecoration = 'underline';
    }
}

boldItalUnder("h2");
