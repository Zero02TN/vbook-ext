load('config.js')
function execute(url) {
    var browser = Engine.newBrowser() // Khởi tạo browser
    browser.launch(url, 5000) // Mở trang web với timeout, trả về Document object
    let doc = browser.html() // Trả về Document object của trang web
    browser.close()
    return Response.success({
        name: doc.select("h1 a").text(),
        cover: doc.select(".book-thumbnail img").first().attr('src'),
        description: doc.select(".tom_tat_truyen").text(),
        author:  doc.select(".mb-3 a[href~=tac-gia]").text(),
        detail: doc.select('.mb-3 a[href~=tac-gia]').text(),
        ongoing: doc.select(".mb-3").html().indexOf("Đang ra") != -1,
        host: BASE_URL
    });
    
}