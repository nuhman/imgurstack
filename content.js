let proxyUrl = "https://proxy.duckduckgo.com/iu/?u=";

$('img').each(function () {
    let $img = $(this);
    let imgsrc = proxyUrl + $img.attr('src');
    $img.attr('src',imgsrc);    
});
