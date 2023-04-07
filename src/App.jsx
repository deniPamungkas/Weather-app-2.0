import "./App.scss";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [placeholder, setPlaceholder] = useState();
  const [filter, setFilter] = useState();
  const [forecast, setForecast] = useState();
  const key = "b6d68ece3515ef2975e60deb754af423";

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // const fetchWeather = async (kota) => {
  //   const data = await fetch(
  //     `https://api.openweathermap.org/geo/1.0/direct?q=${kota}&appid=${key}`
  //   );
  //   return data.json().then(async (res) => {
  //     const weather = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=${key}`
  //     );
  //     return weather.json().then((res) => {
  //       setWeather(res);
  //       setPlaceholder(city);
  //       setCity("");
  //     });
  //   });
  // };

  useEffect(() => {
    if (city !== undefined) {
      if (city !== "") {
        const fetchWeather = async () => {
          const data = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
          );
          return data.json().then((res) => {
            setFilter(res);
          });
        };
        fetchWeather();
      } else if (city === "") {
        setFilter([]);
      }
    }
  }, [city]);

  const cityRef = useRef();

  const fetchWeather = async (res) => {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${res.lat}&lon=${res.lon}&appid=${key}`
    );
    return weather.json().then((result) => {
      setWeather(result);
      setCity("");
    });
  };
  const fetchForecast = async (res) => {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${res.lat}&lon=${res.lon}&appid=${key}`
    );
    return weather.json().then((res) => {
      setForecast(res);
    });
  };

  console.log(forecast);

  return (
    <div className="app">
      <div className="wrap-app">
        <div className="left">
          <div className="item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="inputCity"
                type="text"
                placeholder={
                  placeholder
                    ? placeholder.name + ", " + placeholder.state
                    : "type city"
                }
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
                ref={cityRef}
              />
              <button
                onClick={() => {
                  cityRef.current.focus();
                }}
              >
                <CiSearch />
              </button>
              <div className={`filter`}>
                {filter
                  ? filter?.map((res, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            fetchWeather(res);
                            setPlaceholder(res);
                            fetchForecast(res);
                          }}
                        >
                          {res.name}, {res.state}
                        </li>
                      );
                    })
                  : null}
              </div>
            </form>
          </div>
          <div className="item suhu">
            <h1>{weather ? Math.floor(weather.main.temp - 273) : "-"}^C</h1>
            <span>
              <h2>{weather ? weather.main.humidity : "-"}% hum</h2>
              <p>Wind WSW : {weather ? weather.wind.speed : "-"}mph</p>
            </span>
          </div>
          <div className="item icon"></div>
          <div className="item sun">
            <div id="sunrise">
              <div>
                <p>sunrise</p>
                <img src={"./icons/png/32x32/02d.png"} alt="sunrise" />
              </div>
              <div>
                {weather
                  ? new Date(weather.sys.sunrise).toLocaleTimeString("en-US", {
                      hour12: true,
                    })
                  : "-"}
              </div>
            </div>
            <div id="sunset">
              <div>
                <p>sunset</p>
                <img src="./icons/png/32x32/02n.png" alt="sunset" />
              </div>
              <div>
                {weather
                  ? new Date(weather.sys.sunset).toLocaleTimeString()
                  : "-"}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="logo">NATIONAL WEATHER</div>
          <div id="city">
            <div>
              <h1>
                {weather
                  ? placeholder.name + ", " + placeholder.state
                  : "-"}
              </h1>
              <h2>{new Date().toDateString()}</h2>
            </div>
            <div>
              <img src={`./Icons/png/128x128/${weather? weather.weather[0].icon : ""}.png`} alt="icon" />
            </div>
          </div>
          <div id="title">
            <p>weather forecast</p>
            <h1>{weather ? weather.weather[0].description : ""}</h1>
          </div>
          <div id="forecast">
            <h3>5-Day Forecast</h3>
            {forecast ? ( //console.log(forecast.list[0])
              <div id="wrap-forecast">
                <div className="forecast-item">
                  <div className="day">
                    {days[new Date(forecast.list[8].dt_txt).getDay()]}
                  </div>
                  <div className="icon">
                    <img src={`./icons/png/32x32/${forecast.list[8].weather[0].icon}.png`} alt="" />
                  </div>
                  <p>{forecast.list[8].weather[0].description}</p>
                  <div className="temp">
                    {Math.floor(forecast.list[8].main.temp - 273)}^C
                  </div>
                </div>
                <div className="forecast-item">
                  <div className="day">
                    {days[new Date(forecast.list[16].dt_txt).getDay()]}
                  </div>
                  <div className="icon">
                    <img src={`./icons/png/32x32/${forecast.list[16].weather[0].icon}.png`} alt="" />
                  </div>
                  <p>{forecast.list[16].weather[0].description}</p>
                  <div className="temp">
                    {Math.floor(forecast.list[16].main.temp - 273)}^C
                  </div>
                </div>
                <div className="forecast-item">
                  <div className="day">
                    {days[new Date(forecast.list[24].dt_txt).getDay()]}
                  </div>
                  <div className="icon">
                    <img src={`./icons/png/32x32/${forecast.list[24].weather[0].icon}.png`} alt="" />
                  </div>
                  <p>{forecast.list[24].weather[0].description}</p>
                  <div className="temp">
                    {Math.floor(forecast.list[24].main.temp - 273)}^C
                  </div>
                </div>
                <div className="forecast-item">
                  <div className="day">
                    {days[new Date(forecast.list[32].dt_txt).getDay()]}
                  </div>
                  <div className="icon">
                    <img src={`./icons/png/32x32/${forecast.list[32].weather[0].icon}.png`} alt="" />
                  </div>
                  <p>{forecast.list[32].weather[0].description}</p>
                  <div className="temp">
                    {Math.floor(forecast.list[32].main.temp - 273)}^C
                  </div>
                </div>
                <div className="forecast-item">
                  <div className="day">
                    {days[new Date(forecast.list[39].dt_txt).getDay()]}
                  </div>
                  <div className="icon">
                    <img src={`./icons/png/32x32/${forecast.list[39].weather[0].icon}.png`} alt="" />
                  </div>
                  <p>{forecast.list[39].weather[0].description}</p>
                  <div className="temp">
                    {Math.floor(forecast.list[39].main.temp - 273)}^C
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
