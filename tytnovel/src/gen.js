load('config.js');
function execute(url, page) {
    if (!page) page = '0';
    let response = fetch(`${BASE_HOST}/api/v2/stories/list?offset=${page}&limit=36&sort=${url}`,{
        method: 'GET',
        headers: {
            'client-id': 'simbo',
            'client-language': 'en',
            'client-platform': 'android',
            'client-token': 'tyt',
            'client-version': '55'
        }
    });
    if (response.ok) {
        let json = response.json();
        let books = [];
        json.data.forEach(item => {
            books.push({
                name: item.title,
                link: BASE_URL + '/truyen/' + item.id,
                cover: item.cover,
                description: item.author + ', ' + item.chapter_count + ' chương',
            });
        });

        return Response.success(books, parseInt(page) + 36 + "");
    }
    return null;
}