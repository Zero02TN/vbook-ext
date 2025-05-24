let BASE_URL = 'https://monkeyd.vn';

try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}