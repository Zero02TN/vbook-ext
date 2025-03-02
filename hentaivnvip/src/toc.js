load('config.js');

function execute(url) {
    const list = [];
    let page = 1;
    while (true) {
        // Trang 1 sử dụng url gốc, các trang sau nối thêm /page/{page}
        let pageUrl = (page === 1) ? url : url + '/page/' + page;
        var response = fetch(pageUrl);
        var doc = response.html();
        
        // Lấy danh sách chương từ phần tử chứa danh sách chương (giả sử selector không đổi)
        var chapters = doc.select("ul.version-chap > li > a");
        // Nếu không có chương nào thì thoát vòng lặp
        if (chapters.length === 0) break;
        
        chapters.forEach(chapter => {
            list.push({
                name: chapter.text(),  // nếu chapter đã là thẻ <a> thì dùng text() trực tiếp
                url: chapter.attr("href"),
                host: BASE_URL
            });
        });
        page++;
    }
    // Đảo ngược danh sách nếu cần (theo logic của code cũ)
    return Response.success(list.reverse());
}