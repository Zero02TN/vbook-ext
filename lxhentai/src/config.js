const BASE_URL = 'https://lxmanga.cfd';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}