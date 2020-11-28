const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'ae03522069824d62a67140253202311';
const methods = {
    current: '/current.json',
    forecast: '/forecast.json',
    search: '/search.json',
    history: '/history.json',
    timezone: '/timezone.json',
    sports: '/sports.json',
    astronomy: '/astronomy.json',
}

module.exports = {
    url: BASE_URL,
    key: API_KEY,
    methods: methods,
}