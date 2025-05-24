let BASE_URL = "https://be-app-vip.com";
let BASE_HOST = "https://bnsvip.net";
let B_TOKEN ; 

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