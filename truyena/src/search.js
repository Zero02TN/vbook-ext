function execute(key, page) {
    if (!page) page = '0';
    let response = fetch(`https://atruyen.net/_next/data/RJ--yBs67-Ym_ec4fc0iw/tim-kiem/${key}.json?search=${key}`);
    if (response.ok) {
        let json = response.json();
        let currentPage = json.pageProps.pager.page;
        let lastPage = json.pageProps.pager.limit;
        let books = [];
        json.pageProps.books.forEach(item => {
            let nslug = item.slug.replace(/ /g, "-")
            books.push({
                name: item.title,
                link: nslug+'.' + item._id,
                cover: `https://cdn.atruyen.net/a/img/str/100x120/${item.img}`,
                description: item.author.name + ', ' + item.chapterCount + ' chương',
            });
        });
        if (currentPage < lastPage) {

            return Response.success(books, (currentPage + 1) + "");
        }

        return Response.success(books);
    }
    return null;
}