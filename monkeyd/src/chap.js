function execute(url) {
    let response = fetch(url)
    if(response.ok){
        let doc = response.html()
        doc.select('p.signature').remove();
        let content = doc.select('.content-container p').html()
            .replace(/\n/gi, "<br>")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
        return Response.success(content);
    }
    return null;
}