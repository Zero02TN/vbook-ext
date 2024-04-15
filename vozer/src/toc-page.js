load('config.js');

function execute(url) {
    const data = [];
    let doc = Http.get(url).html();
    let firstPage = 1;
    let lastPage = 1;

    let tmpLastPage;
    tmpLastPage = doc.select("nav[role=navigation] > div > span > a.py-1");
    tmpLastPage = parseInt(tmpLastPage.last().text());

    if (!isNaN(tmpLastPage)) {
        lastPage = tmpLastPage;
    }

    for (let i = firstPage; i <= lastPage; i++) {
        data.push(url + "?pagechap=" + i);
    }

    return Response.success(data);
}
