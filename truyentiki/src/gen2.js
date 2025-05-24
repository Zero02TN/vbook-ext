function execute(url, page) {
    if (!page) page = '0';
    let response = fetch(`https://truyentiki.top/api/app?ctl=home&func=${url}`);
    if (response.ok) {
        let json = response.json();
        let books = [];
        json.topBooks.forEach(item => {
            books.push({
                name: item.title,
                link: item._id,
                cover: 'https://cdn.truyentiki.top/a/img/str/100x120/'+item.img,
                host: "https://truyentiki.top/api/"
            });
        });

        return Response.success(books, (parseInt(page) + 1) + "");
    }
    return null;
}