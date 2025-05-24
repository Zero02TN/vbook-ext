load('config.js');
function execute(url) {
    let chapId = url.split('|')[1];
    if (B_TOKEN === "Nhocconsr") {
        let newtoken = fetch(BASE_HOST+'/api/auth/session').json().accessToken
        let response = fetch(BASE_URL+'/api/chapter-app/v2/'+chapId, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + newtoken,
            }
        });
        if (response.ok) {
            let data = response.json();
            if (data && data.content) {
                let content = data.content.replace(/<!-- (.*?) -->/gm, '')
                    .replace(/<p(.*?)>(.*?)<?p>/g, '')
                    .replace(/\n/g, '<br>');
                return Response.success(content);
            } else {
                return Response.success("Đã có token! Đây là chương mất tiền hoặc bạn chưa thêm mã và đăng nhập tài khoản vào bằng vbook.'");
            }
        }
    } else {
        let response = fetch(BASE_URL+'/api/chapter-app/v2/'+chapId);
        if (response.ok) {
            let data = response.json();
            if (!data || data.price > 0) {
                return Response.success("Đây là chương mất tiền hoặc bạn chưa thêm mã và đăng nhập tài khoản vào bằng vbook.");
            } else {
                let content = data.content.replace(/<!-- (.*?) -->/gm, '')
                    .replace(/<p(.*?)>(.*?)<?p>/g, '')
                    .replace(/\n/g, '<br>');
                return Response.success(content);
            }
        }

    }
}