import config from "./config";

class WeatherApi {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.key = config.key;
    this.lang = config.lang;
  }

  getWeatherApi = keyword => {
    return fetch(`${this.baseUrl}weather?q=${keyword}&units=metric&appid=${this.key}&lang=${this.lang}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
      })
      .catch((err) => {
        throw err;
      })
  }
}

const api = new WeatherApi(config);
export default api;
