function execute() {
    let response = fetch("https://tamhoan.com/the-loai/huyen-huyen");
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select('.FilterStory_Category a.btn ').forEach(e => data.push({
           title: e.text(),
           input: e.attr('data-id'),
           script: 'gen.js'
        }));
        return Response.success(data);
    }
    return null;
}