load('config.js');
function execute() {
    return Response.success([
        { title: "Cập Nhật", input: BASE_URL + "/danh-sach", script: "gen.js" },
        { title: "Truyện màu", input: BASE_URL + "/the-loai-16-full-color", script: "gen.js" },
        { title: "Manhwa", input: BASE_URL + "/the-loai-115-manhwa", script: "gen.js" },
        { title: "Truyện ngắn", input: BASE_URL + "/the-loai-7-oneshot", script: "gen.js" },
    ]);
}