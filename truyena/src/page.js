function execute(url) {
    let list = [];
    let slug = url.split('/').pop()
    let response = fetch(`https://truyena.net/_next/data/liC7PPLgTtFgvW9VzBczS/${slug}.json?bookSlug=${slug}`);
    if (response.ok) {
        let json = response.json()
        let allchap = json.pageProps.pager.count/50;
        let bid = json.pageProps.book._id
        for (var i = 0; i <= allchap; i++)
            list.push(`https://truyena.net/api?ctl=book&func=getChapters&bookId=${bid}&page=${i}`);
        return Response.success(list);
    }
    return null;
}