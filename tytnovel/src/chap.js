function execute(url) {
    let response = fetch(url,{
        method: 'GET',
        headers: {
            'client-id': 'simbo',
            'client-language': 'en',
            'client-platform': 'android',
            'client-token': 'tyt',
            'client-version': '55'
        }
    });
    if (response.ok) {
        let json = response.json();
        let content = json.data.content
            .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "")
            .replace(/(\<br[\s]*\/?\>[\s]*)+/g, '<br>');
        return Response.success(content)
    }
}