function execute() {
    return Response.success([
        { title: "Latest Update", input: "update", script: "gen.js" },
        { title: "Action", input: "action", script: "gen.js" },
        { title: "Adventure", input: "adventure", script: "gen.js" },
    ]);
}