function execute() {
    const doc = fetch("https://www.mangaread.org").html();
    const el = doc.select("ul.sub-menu > li a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href'),
           script: 'gen.js'
        });
    }
    return Response.success(data);
}