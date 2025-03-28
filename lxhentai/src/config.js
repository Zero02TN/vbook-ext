const BASE_URL = 'https://lxmanga.online';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}