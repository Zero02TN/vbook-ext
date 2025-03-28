load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = fetch(url).html();
    var el = doc.select("#image-container");
    var imgs = [];
    el.forEach(e =>{
        var link = e.attr("data-src") ;
        if (link.indexOf("banners") < 0) {
            imgs.push(link.trim())
        }
    })
    return Response.success(imgs);
}