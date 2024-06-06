function execute(url) {
    let sid = url.match(/\d+/)
    let response = fetch(url);
    if (response.ok) {
        let chapters = [];
        response.json().chapters.forEach(item => {
            chapters.push({
                name: item.title,
                url: `https://truyena.net/api?ctl=chapter&func=getContent&bookId=${sid}&index=${item.index}&force=0`

            });
        });
        return Response.success(chapters);
    }
    return Response.success(sid);
}