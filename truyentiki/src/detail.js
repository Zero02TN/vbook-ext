function execute(url) {
    if (url.indexOf('api') >0){
        var sid = url.split('/').pop()
    }else{
        var sid = url.split('.').pop()
    }
    const json = fetch(`https://truyentiki.top/api/app?ctl=book&func=index&bookId=${sid}`).json();
    return Response.success({
            name: json.title,
            cover: 'https://cdn.truyentiki.top/a/img/str/100x120/'+json.img,
            author: json.author.name,
            description: json.description,
            detail: "Đánh giá " + json.avg_rating + "<br>" + json.chapterCount + " chương" + "<br>" + json.total_words + " chữ" + "<br>" + json.views.all + " lượt xem",
            ongoing: json.status === 0,
        });
}