load("config.js");

function execute(url) {
    const tocUrl = url.split('/api')[0]
    let response = fetch(`${BASE_URL}/api${url.split('/api')[1]}`);
    if (response.ok) {
        let chapters = [];
        response.json().chapters.data.forEach(item => {
            chapters.push({
                name: item.name,
                url: tocUrl + '/chuong-' + item.chapter_number + '|' + item.id,
                pay: item.price > 0
            });
        });
        return Response.success(chapters);
    }
    return null;

}