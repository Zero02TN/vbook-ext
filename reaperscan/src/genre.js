load('config.js')
function execute() {
    let response = fetch(`${BASE_URL}/manga`)
    if (response.ok){
        let el = response.html().select('.dropdown-menu').first().select('li')
        let list = []
        el.forEach(e =>{
            list.push({
                title: e.select('label').text(),
                input: e.select('label').text(),
                script: 'source.js'
            });
        })
        return Response.success(list)
    }
}