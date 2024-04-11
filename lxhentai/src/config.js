const BASE_URL = 'https://lxmanga.cc';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}