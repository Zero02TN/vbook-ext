load('config.js')
function execute(url) {
    let response = fetch(url)
    if (response.ok){
        let doc = response.html()
        let el = doc.select('.chapter-list-container a')
        let list = []
        el.forEach(item =>{
            list.push({
                name: item.text(),
                url: url+"/"+item.text().toLowerCase().replace(" ", "-"),
                host: BASE_URL
            })
        })

        return Response.success(list.reverse())
    }
}