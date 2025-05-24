function execute(url) {
    let response = fetch(url)
    if(response.ok){
        let doc = response.html()
        let content = doc.select('.content-container p').html()
            .replace(/\n/gi, "<br>")
            .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
        return Response.success(content);
    }
    return null;
}