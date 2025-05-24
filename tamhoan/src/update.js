function execute(url, page) {
    const response = fetch(url);
    const doc = response.html();
    
    const items = [];
    
    const elements = doc.select(".latestStories .latestHover");
    
    elements.forEach(element => {
        items.push({
            name: element.select("h4 a").text(),
            link: element.select("h4 a").attr("href"),
            cover: "https://tamhoan.com" + element.select("img").attr("src"),
            description: element.select("a[href~=tac-gia]").text(),
            host : "https://tamhoan.com",
        });
    })
    
    // const next = doc.select(".pagination .next").size() > 0 ? page + 1 : null;
    return Response.success(items);
} 
