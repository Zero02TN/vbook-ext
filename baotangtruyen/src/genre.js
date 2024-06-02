load('config.js')
function execute() {
    const doc = fetch(BASE_URL).html()
    var list = doc.select('.link-footer ul li')
    var data = []
    list.forEach(e => data.push({
        title: e.text(),
        input: e.select('a').attr('href').split('/').pop(),
        script: 'gen2.js'   
    }))
    return Response.success(data)
}