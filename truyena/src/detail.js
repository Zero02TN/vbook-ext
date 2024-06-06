function execute(url) {
    let slug = url.split('/').pop()
    let response = fetch(`https://truyena.net/_next/data/liC7PPLgTtFgvW9VzBczS/${slug}.json?bookSlug=${slug}`);
    if(response.ok){
        let book = response.json().pageProps.book;
        return Response.success({
            name: book.title,
            cover: `https://cdn.truyena.net/a/img/str/300x390/${book.img}`,
            author: book.author.name,
            description: book.description,
            detail: book.titleCN +'<br>'+book.chapterCount+' chương',
            ongoing : book.status === 0,
            host: "https://truyena.net",
        });
    }
    return null;
}