load("config.js");
function execute(url) {
    let sid = url.match(/([a-z0-9]{24})/)[1];
    let response = fetch(`${BASE_HOST}/api/v2/stories/${sid}/detail`,{
        method: 'GET',
        headers: {
            'client-id': 'simbo',
            'client-language': 'en',
            'client-platform': 'android',
            'client-token': 'tyt'
        }
    });
    if (response.ok) {
        let pages = [];
        let allP = response.json().data.chapter_count/100;
        if (allP < 1){
            pages.push(`${BASE_HOST}/api/v2/chapters/numbers?story_id=${sid}&start=0&end=100`)
            return Response.success(pages);
        }else{
            const step = 100;
            for (let i = 0; i < allP; i++) {
                let st = i * step + (i > 0 ? 1 : 0);
                let ed = (i + 1) * step;
                pages.push(`${BASE_HOST}/api/v2/chapters/numbers?story_id=${sid}&start=${st}&end=${ed}`);
            }
            return Response.success(pages);
        }
        
    }
    return Response.success('Many Request!');
}
