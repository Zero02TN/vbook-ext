function execute(url) {
    const response = fetch(url);
    const doc = response.html();
    
    const chapters = [];
    const elements = doc.select(".chapter-list a");
    
    for (const element of elements) {
        chapters.push({
            name: element.text(),
            url: element.attr("href")
        });
    }
    
    return Response.success(chapters);
} 