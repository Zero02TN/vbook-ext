function execute() {
    return Response.success([
        { title: "Mới Nhất", input: "created", script: "gen.js" },
        { title: "Cập Nhật", input: "updated", script: "gen.js" },
        { title: "Đánh Giá", input: "star", script: "gen.js" },
        { title: "Yêu Thích", input: "like_count", script: "gen.js" },
        { title: "Xem Nhiều", input: "view_count", script: "gen.js" },
    ]);
}