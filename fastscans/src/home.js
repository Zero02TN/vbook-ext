function execute() {
    return Response.success([
        { title: "Cập Nhật", input: "updatedOnUtc", script: "gen.js" },
        { title: "Phổ Biến", input: "views", script: "gen.js" },
    ]);
}