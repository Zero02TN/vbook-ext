function execute() {
    let response = fetch('https://atruyen.net/_next/data/RJ--yBs67-Ym_ec4fc0iw/index.json')
    if (response.ok){
        let genres = [];
        response.json().pageProps.categories.forEach(item => {
            genres.push({
                title: item.title,
                input:  `https://atruyen.net/_next/data/RJ--yBs67-Ym_ec4fc0iw/the-loai/${item._id}.json?catId=${item._id}`,
                script: 'gen.js'
            });
        });
        return Response.success(genres);
    }
    
    return Response.success(data);
}