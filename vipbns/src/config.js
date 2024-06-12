let BASE_URL = "https://ngocsach.com";
let BASE_HOST = "https://bachngocsach.net.vn";
var B_TOKEN;

try {
    if (CONFIG_TOKEN) {
        B_TOKEN = CONFIG_TOKEN;
    }
} catch (error) {
}
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}