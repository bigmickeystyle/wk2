(function(){
    function bodyInsert(){
        var elem = document.createElement("div");
        var text = document.createTextNode("AWESOME");
        elem.appendChild(text);
        console.log(elem);
        document.body.appendChild(elem);
        elem.style.display = "fixed";
        elem.style.zIndex = "2147483647";
        elem.style.left = "20px";
        elem.style.top - "100px";
        elem.style.fontSize = "200px";
    }

    bodyInsert();
})();
