load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".trailer-box img").first().attr("src"),
        author: doc.select("p:contains(Tác giả) b").first().text(),
        description: doc.select(".col-lg-6 .trailer-content p").last().text(),
        detail: doc.select(".col-lg-3 .trailer-content").html().replace(/\n/g, '<br>'),
        ongoing: doc.select(".trailer-content").html().indexOf("Đang tiến hành") != -1,
        host: BASE_URL
    });
}