$('img').each(function() {
    var $img = $(this);
    var imgsrc = $img.attr('src');
    var imgsrc1 = "https://proxy.duckduckgo.com/iu/?u=" + imgsrc;
    $img.attr('src',imgsrc1);    
});