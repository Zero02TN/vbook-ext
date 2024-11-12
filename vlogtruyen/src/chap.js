load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select(".comicDetails img");
        console.log(el);    
        let data = [];
        for (var i = 0; i < el.size(); i++) {
            var e = el.get(i);
            let img = e.attr("src");
            if (img.includes('/images/')) {
                continue;
            }
            data.push(img);   
        }
        return Response.success(data);
    }
    return null;
}
