load('config.js')
function execute() {
    let response = fetch(BASE_URL)
    if (response.ok){
        let el = response.html().select('.dropdown-menu li a')
        let data = []
        for (var i = 9; i < 13; i++) {
            var e = el.get(i);
            data.push({
            title: e.text(),
            input: e.attr('href').split('=').pop(),
            script: 'search.js'
            });
        }
        return Response.success(data)
    }
}