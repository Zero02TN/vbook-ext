load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(`${BASE_URL}/page/${page}/?s=${key}`);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".listupd .bs").forEach(e => {
            data.push({
                name: e.select("a").first().attr('title'),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").attr("src"),
                description: e.select(".epxs").first().text(),
                host: BASE_URL
            });
        });
        if(doc.select(".listupd .bs").size() > 0){
            var next = (parseInt(page) + 1) + ""
        }
        return Response.success(data, next || null);
    }
    return null;
}