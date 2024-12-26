function execute(url) {
    let list = [];
    let slug = url.split('/').pop()
    let response = fetch(`https://atruyen.net/_next/data/RJ--yBs67-Ym_ec4fc0iw/${slug}.json?bookSlug=${slug}`);
    if (response.ok) {
        let json = response.json()
        let allchap = json.pageProps.pager.count/50;
        let bid = json.pageProps.book._id
        for (var i = 0; i <= allchap; i++)
            list.push(`https://atruyen.net/api?ctl=book&func=getChapters&bookId=${bid}&page=${i}`);
        return Response.success(list);
    }
    return null;
}