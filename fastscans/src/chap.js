function execute(url) {
    var doc = fetch(url).text();
    const urlPattern = /https:\/\/s1\.fastscans\.net\/[0-9a-zA-Z-_]+\/chap-\d+\/[0-9a-zA-Z-_]+(?:\.(png|jpg|jpeg))?/g;
    const urls = doc.match(urlPattern);
    return Response.success(urls);

}