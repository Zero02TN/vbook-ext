function execute(key, page) {
    const url = `https://tamhoan.com/tim-kiem?keyword=${encodeURIComponent(key)}&page=${page}`;
    const response = fetch(url);
    const doc = response.html();
    
    const items = [];
    const elements = doc.select(".search-result-item");
    
    for (const element of elements) {
        items.push({
            name: element.select(".story-name").text(),
            link: element.select("a").attr("href"),
            cover: element.select("img").attr("src"),
            description: element.select(".story-desc").text()
        });
    }
    
    const next = doc.select(".pagination .next").size() > 0 ? page + 1 : null;
    return Response.success(items, next);
} 