load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    return Response.success({
        name: doc.select("h1").text().replace(/NEW |Ongoing /gi,''),
        cover: doc.select(".summary_image img").first().attr("src"),
        author: doc.select("div.author-content").first().text(),
        description: doc.select(".manga-excerpt").text(),
        detail: doc.select("div.post-status > div:nth-child(1)").html()+ "<br>" + doc.select("div.post-status > div:nth-child(2)").html(),
        host: BASE_URL
    });
}