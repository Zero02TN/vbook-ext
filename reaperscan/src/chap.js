function execute(url) {
    var doc = fetch(url).html();
    var el = doc.select("#readerarea img");
    const data = [];
    el.forEach(e => {
        data.push(e.attr("data-src").trim());
    })
    return Response.success(data);
}