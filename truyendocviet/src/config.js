let BASE_URL = "https://truyendocviet.com";
let BASE_API = "https://api.fastscans.net";


try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}