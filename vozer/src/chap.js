function execute(url) {
    let doc = Http.get(url).html();
    let content = doc.select(".mb-3 .smiley").html();
    content = content.replace(/\n/gm, '<br>')
            .replace(/<[a-z]+ style.*?>.*?<\/[a-z]+>/gm, '')
            .replace(/(<br\s*\/?>( )?){2,}/g, '<br>')
    return Response.success(content);
}