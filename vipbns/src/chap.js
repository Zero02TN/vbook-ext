function execute(url) {
    let chapId = url.split('|')[1];
    let browser = Engine.newBrowser();
    browser.launch(url.split('|')[0], 5000);
    browser.close();
    let response = fetch('https://bachngocsach.net.vn/api/chapter/'+chapId);
    if (response.ok) {
        let data = response.json();
        if (!data || data.chapter.price > 0) {
            return Response.error('Đây là chương mất tiền hoặc bạn chưa đăng nhập nick vào web bằng vbook. Đăng nhập rồi load lại nhé!');
        } else {
            let content = data.chapter.content.replace(/<!-- (.*?) -->/gm, '')
                .replace(/<p(.*?)>(.*?)<?p>/g, '')
                .replace(/\n/g, '<br>');
            return Response.success(content);
        }
    }
}