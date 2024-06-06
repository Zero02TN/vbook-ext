function execute(url) {
    let response = fetch(url);
    if(response.ok){
        const data = response.json();
        var content = data.chapter.content || "Lỗi load chương hoặc site nguồn xì ke";
        var content = content.replace(/<\/?i.*?>/g, "");
        return Response.success(content);
    }
    return null;
}