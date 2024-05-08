load('crypto.js');
function execute(url) {
    const slug = url.substring(url.indexOf("m/") + 2, url.lastIndexOf("/c"));
    const chapId = url.match(/\d+/)[0];
    let res = fetch(`https://api.viptruyenfull.com/api/v1/chapters/get-chapter/${slug}/${chapId}`).json().data.content;
    let $ = Html.parse(getDecryptedCode(res))
    let content = $.select('body').html()
        .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "")
        .replace(/<h([1-6])[^>]*>([\s\S]+?)<\/h\1>/gi, "")
        .replace(/<[^>]*>?/gm, '')
        .replace(/\n/gi, "<br>")
        .replace(/VIPtruyenfull.com/gi, "")
        .replace(/=== oOo ===/gi, "")
        .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
    return Response.success(content)
}
function getDecryptedCode(text) {
    var key = 'j4DSfugdAASCKEwAAAD8xGX0qEeHh-WJzRc11TBp&%#%$2';
    var decryptedWA = CryptoJS.AES.decrypt(text, "j4DSfugdAASCKEwAAAD8xGX0qEeHh-WJzRc11TBp&%#%$2");
    var decryptedUtf8 = decryptedWA.toString(CryptoJS.enc.Utf8);
    return decryptedUtf8;
}