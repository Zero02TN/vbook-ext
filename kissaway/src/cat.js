function execute(url, page) {
    const genre = url.split('-')[3].split('.')[0];
    if (!page) page = '1';
    const doc = Http.get('https://klz9.com/manga-list.html').params({
        listType: 'pagination',
        page : page,
        genre: genre,
        sort: 'last_update',
        sort_type: 'DESC',
    }).html();
    var next = doc.select(".pagination").select("li:has(a.active) + li").text()

    const el = doc.select(".bodythumb > div.thumb-item-flow")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".series-title a").first().text(),
            link: e.select(".series-title a").first().attr("href"),
            cover: e.select(".a6-ratio div").first().attr("data-bg"),
            description: e.select(".thumb-detail a").first().text(),
            host: "https://klz9.com"
        })
    }

    return Response.success(data, next)
}