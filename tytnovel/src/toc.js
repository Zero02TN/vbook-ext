load("config.js");
function execute(url) {
    let response = fetch(url,{
        method: 'GET',
        headers: {
            'client-id': 'simbo',
            'client-language': 'en',
            'client-platform': 'android',
            'client-token': 'tyt'
        }
    });
    if (response.ok) {
        let chapters = [];
        response.json().data.forEach(item => {
            chapters.push({
                name: item.title,
                url: `${BASE_HOST}/api/v2/chapters/detail?number=${item.number}&story_id=${item.story_id.$oid}`,
            });
        });
        return Response.success(chapters);
    }
    return null;

}