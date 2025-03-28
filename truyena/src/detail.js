function execute(url) {
    let slug = url.split('/').pop()
    let response = fetch(`https://atruyen.net/_next/data/RJ--yBs67-Ym_ec4fc0iw/${slug}.json?bookSlug=${slug}`);
    if(response.ok){
        let book = response.json().pageProps.book;
        return Response.success({
            name: book.title,
            cover: `https://cdn.atruyen.net/a/img/str/300x390/${book.img}`,
            author: book.author.name,
            description: book.description,
            detail: book.titleCN +'<br>'+book.chapterCount+' chương',
            ongoing : book.status === 0,
            host: "https://atruyen.net",
        });
    }
    return null;
}