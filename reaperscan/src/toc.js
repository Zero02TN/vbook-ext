load('config.js')
function execute(url) {
    let response = fetch(url)
    if (response.ok){
        let doc = response.html()
        let el = doc.select('#chapterlist ul li a')
        let list = []
        el.forEach(item =>{
            list.push({
                name: item.select('.chapternum').text(),
                url: item.attr('href'),
                host: BASE_URL
            })
        })

        return Response.success(list.reverse())
    }
}