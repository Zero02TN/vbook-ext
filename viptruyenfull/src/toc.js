function execute(url) {
    let slug = url.split('/').pop();
    let sid = fetch('https://api.viptruyenfull.com/api/v1/novels/'+slug).json().data.id;
    let reponse = fetch(`https://api.viptruyenfull.com/api/v1/chapters/${sid}?page=1&limit=99999&orderBy=chapterNumber&order=-1&`);
    if (reponse.ok){
        let json = reponse.json().data;
        let allChap = json.list.reverse()
        let list = [];
        allChap.forEach(chap => {
            let buy = chap.price > 0 === true ? true : false;
            list.push({
                name: chap.name,
                url: url+'/'+chap.chapterString,
                pay: buy,
                host: "https://viptruyenfull.com"
            })
        });
        return Response.success(list);
    }
    return null;
}