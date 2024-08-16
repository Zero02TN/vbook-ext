function execute(url) {
    let repsonse = fetch(url);
    if(repsonse.ok){
        let doc = repsonse.html();
        let chap = doc.select(".list-chapter li a");
        const data = [];
        chap.forEach(e => {
            data.push({
                name: e.text(),
                url: e.attr('href'),
                host: "https://truyenfulldich.com"
            })
        })
        return Response.success(data);
    }
    return null;
}