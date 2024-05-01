load("config.js");

function execute(url) {
    let slug = url.split('/').pop();
    let bookId = fetch(`${BASE_URL}/api/story-by-slug/${slug}`).json().id;
    let response = fetch(BASE_URL + "/api/story/" + bookId + "/chapter?per_page=50&page=1&order_by=asc");
    if (response.ok) {
        let pages = [];
        let lastPage = response.json().chapters.last_page;
        for (let i = 1; i <= lastPage; i++) {
            pages.push(url + "/api/story/" + bookId + "/chapter?per_page=50&page=" + i + "&order_by=asc");
        }

        return Response.success(pages);
    }

    return null;
}