function execute() {
    let response = fetch('https://truyena.net/_next/data/liC7PPLgTtFgvW9VzBczS/index.json')
    if (response.ok){
        let genres = [];
        response.json().pageProps.categories.forEach(item => {
            genres.push({
                title: item.title,
                input:  `https://truyena.net/_next/data/liC7PPLgTtFgvW9VzBczS/the-loai/${item._id}.json?catId=${item._id}`,
                script: 'gen.js'
            });
        });
        return Response.success(genres);
    }
    
    return Response.success(data);
}