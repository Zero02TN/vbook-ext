function execute(id, page) {
    if (!page) page = '1';
    const response = fetch(`https://tamhoan.com/loc-truyen?category=${id}&count=&status=&order=view&page=${page}`);
    const doc = response.html();
    
    const items = [];
    const elements = doc.select(".filterData .card");
    
    elements.forEach(element => {
        items.push({
            name: element.select("h4 a").text(),
            link: element.select("h4 a").attr("href"),
            cover: "https://tamhoan.com" + element.select("img").attr("src"),
            description: element.select("a[href~=tac-gia]").text(),
            host : "https://tamhoan.com",
        });
    })
    
    let next = doc.select(".pagination").select('li.active + li').text();
    return Response.success(items, next);
} 