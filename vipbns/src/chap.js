load('config.js');
function execute(url) {
    let chapId = url.split('|')[1];
    if (B_TOKEN) {
        let newtoken = fetch('https://bachngocsach.net.vn/api/auth/session',{
            method: 'GET',
            headers: {
                cookie: '__Secure-next-auth.session-token='+B_TOKEN
            }
        }).json().accessToken
        let response = fetch('https://ngocsach.com/api/chapter-app/'+chapId, {
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
                return Response.success("Đã có token! Đây là chương mất tiền hoặc bạn chưa thêm mã tài khoản vào ext bằng vbook.<br>Thêm mã như sau vào <br> let CONFIG_TOKEN = 'Nhập mã token từ tài khoản của bạn'");
            }
        }
    } else {
        let response = fetch('https://ngocsach.com/api/chapter-app/'+chapId);
        if (response.ok) {
            let data = response.json();
            if (!data || data.price > 0) {
                return Response.success("Đây là chương mất tiền hoặc bạn chưa thêm mã tài khoản vào ext bằng vbook.<br>Thêm mã như sau vào <br>let CONFIG_TOKEN = 'Nhập mã token từ tài khoản của bạn'");
            } else {
                let content = data.content.replace(/<!-- (.*?) -->/gm, '')
                    .replace(/<p(.*?)>(.*?)<?p>/g, '')
                    .replace(/\n/g, '<br>');
                return Response.success(content);
            }
        }

    }
}