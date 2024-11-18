load('config.js');
function execute(url) {
    let data = [];
    let doc = fetch(url).html();
    const anchors = doc.select('a[href*="pagechap="]:not([rel])');
    let lastNumber = -1;
    anchors.forEach(anchor => {
        const href = anchor.attr('href'); 
        const match = href.match(/pagechap=(\d+)/);
        if (match) {
            const pageNumber = parseInt(match[1], 10);
            lastNumber = Math.max(lastNumber, pageNumber);    
        }
    });
    for (let i = 1; i <= lastNumber; i++) {
        data.push(url + "?pagechap=" + i);
    }
    // Trả về số cuối cùng
    return Response.success(data);
}
