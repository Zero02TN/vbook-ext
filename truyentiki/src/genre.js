function execute() {
    const response = fetch("https://truyentiki.top/api/app?ctl=home&func=index");
    if (response.ok){
        let genres = [];
        response.json().categories.forEach(item => {
            genres.push({
                title: item.title,
                input: item._id,
                script: 'cat.js'
            });
        });
        return Response.success(genres);
    }

}