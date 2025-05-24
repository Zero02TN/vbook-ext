function execute(url, page) {
    if (!page) page = '1';
    const response = fetch(url);
    const doc = response.html();
    
    const items = [];
    
    const elements = doc.select(".categoryBox .card");
    
    elements.forEach(element => {
        items.push({
            name: element.select("h4 a").text(),
            link: element.select("h4 a").attr("href"),
            cover: "https://tamhoan.com" + element.select("img").attr("src"),
            description: element.select("a[href~=tac-gia]").text(),
            host : "https://tamhoan.com",
        });
    })
    
    return Response.success(items);
} 
