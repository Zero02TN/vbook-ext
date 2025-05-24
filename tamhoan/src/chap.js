function execute(url) {
    const response = fetch(url);
    const doc = response.html();
    
    const content = doc.select(".chapter-content").html();
    return Response.success(content);
} 