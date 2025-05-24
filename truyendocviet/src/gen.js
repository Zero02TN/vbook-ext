load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    var browser = Engine.newBrowser() // Khởi tạo browser
    browser.launch(`${BASE_URL}/doc-truyen/page-${page}.html`, 5000) // Mở trang web với timeout, trả về Document object
    let doc = browser.html() // Trả về Document object của trang web
    browser.close()
    if (doc) {
        let data = [];
        doc.select(".products li").forEach(e => {
            data.push({
                name: e.select("a").first().attr('title'),
                link: e.select("a").first().attr("href"),
                cover: e.select("a img").attr("src"),
                description: e.select(".sg-rating a").first().text(),
                host: BASE_URL
            });
        });
        if(doc.select(".products li").size() > 0){
            var next = (parseInt(page) + 1) + ""
        }
        return Response.success(data, next);
    }
    return null;
}