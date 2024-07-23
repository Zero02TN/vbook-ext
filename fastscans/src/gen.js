load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(`${BASE_API}/portal/api/client/comicapp/paging`,{
        method: 'GET',
        queries: {
            'PageNumber': page,
            'PageSize': '24',
            'SortColumn': url,
            'SortDirection': 'desc',
            "region" : "vi"
        }
    });
    if (response.ok) {
        let json = response.json().data;
        let books = [];

        json.data.forEach(item => {
            books.push({
                name: item.title,
                link: BASE_URL + '/truyen-tranh/' + item.friendlyName,
                cover: item.cdnThumbnailUrl,
                description: item.tags + ', ' + item.lastCollectionTitle,
            });
        });
        if(json.data.length === 0){
            var next = null;
        }else{
            var next = parseInt(page) + 1 + ""
        }
        return Response.success(books, next);
    }
    return null;
}