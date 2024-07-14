function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select(".reading-content img");
    
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push(e.attr("src").trim());
    }
    return Response.success(data);
}