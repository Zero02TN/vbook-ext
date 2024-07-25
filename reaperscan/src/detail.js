load('config.js')
function execute(url) {
    const doc = fetch(url).html()
    let genres = [];
    doc.select('.seriestugenre a').forEach(e =>{
        genres.push({
            title: e.text(),
            input: e.text(),
            script: "source.js"
        });
    });
    return Response.success({
        name: doc.select("h1").text(),
        cover: doc.select(".thumb img").first().attr('data-src'),
        description: doc.select(".entry-content").text(),
        genres: genres,
        author:  doc.select("tr:contains(Author) td").last().text(),
        detail: doc.select('.seriestucontr').html(),
        ongoing: doc.select(".status-value").html().indexOf("Ongoing") != -1,
        host: BASE_URL
    });
}