function execute() {
    return Response.success([
        {title: "Truyện mới", input: "https://truyena.net/_next/data/liC7PPLgTtFgvW9VzBczS/danh-muc/truyen-moi.json?directory=truyen-moi", script: "gen.js"},
    ]);
}