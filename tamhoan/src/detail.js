function execute(url) {
    const response = fetch(url);
    const doc = response.html();
    
    return Response.success({
        name: doc.select(".mt-4 h1").text(),
        cover: "https://tamhoan.com"+doc.select(".book img").attr("src"),
        author: doc.select("a[href~=tac-gia]").first().text(),
        description: doc.select(".intro-content").html(),
        detail: doc.select(".col-md-6 p").html(),
        ongoing: !doc.select(".card-featured ").text().includes("Hoàn thành"),
        host: "https://tamhoan.com"
    });
}

