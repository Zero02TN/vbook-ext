load('config.js')
function execute(url) {
    let sid = url.split('-').pop()
    let response = fetch(BASE_URL+"/Story/ListChapterByStoryID", {
        "method": "POST",
        "body": {StoryID: sid},
    });
    var doc = response.html();
    var el = doc.select(".chapter a");
    const data = [];
    el.forEach(e =>
        data.push({
            name: e.text(),
            url:  e.select('a' ).attr("href"),
            host: BASE_URL
        })
    )
    return Response.success(data.reverse()); 
}