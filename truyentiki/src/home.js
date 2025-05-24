function execute() {
    return Response.success([
        {title: "Cập nhật", input: "index", script: "gen.js"}, 
        {title: "Top Truyện", input: "index", script: "gen2.js"}, 
    ]);
}