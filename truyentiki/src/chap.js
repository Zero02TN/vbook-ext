function execute(url) {
    const doc =fetch(url + '/').text();
    const regex = /"chp_id":"(\d+)"/g;
    var chpId = regex.exec(doc)[1];
    const response = fetch('https://truyentiki.top/index.php').params({
        ajax : 1,
        chp_id : chpId,
    });
    var data = response.json();
    var content = data['chp_content_cv'];
    if (content){
        var content = content.replace(/<\/?i.*?>/g, "");
        return Response.success(content);
    }else if (content = data['chp_content_gg']) {
        var content = content.replace(/<\/?i.*?>/g, "");
        return Response.success(content);
    }else{
        return Response.success('Chương này không có hoặc đang được cập nhật, bạn vui lòng thử lại sau 3 giây !');
    }
}