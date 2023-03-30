import "./App.scss";
import icon from "./Icons/png/128x128/clear.png"
import icon2 from './Icons/png/32x32/cloudy.png'
import sunrise from './Icons/png/32x32/mostlysunny.png'
import sunset from './Icons/png/32x32/nt_mostlysunny.png'
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  const [placeholder, setPlaceholder] = useState("Type City");
  const key = "b6d68ece3515ef2975e60deb754af423";

  const fetchWeather = async (kota) => {
    const data = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${kota}&appid=${key}`
    );
    return data.json().then(async (res) => {
      const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=${key}`
      );
      return weather.json().then((res) => {
        setWeather(res);
        setPlaceholder(city);
        setCity("");
      });
    });
  };

  return (
    <div className="app">
      <div className="wrap-app">
        <div className="left">
          <div className="item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetchWeather(city);
                console.log(weather);
              }}
            >
              <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
              />
              <button type="submit">
                <CiSearch />
              </button>
            </form>
          </div>
          <div className="item suhu">
            <h1>{weather ? Math.floor(weather.main.temp - 273) : "^"}</h1>
            <span>
              <h2>9,9% </h2>
              <p>Wind WSW : 6mph</p>
            </span>
          </div>
          <div className="item icon">
          </div>
          <div className="item">item</div>
          <div className="item sun">
            <div id="sunrise">
                <div>
                  <p>sunrise</p>
                </div>
                <img src={sunrise} alt="sunrise" />
            </div>
            <div id="sunset">
                <div>
                  <p>sunset</p>
                </div>
                <img src={sunset} alt="sunset" />
            </div>
          </div>
        </div>
        <div className="right">
          <div id="logo">NATIONAL WEATHER</div>
          <div id="city">
            <div>
              <h1>{weather ? weather.name : "Purwodadi Grobogan"}</h1>
              <h2>March 28, 2023</h2>
            </div>
            <div>
            <img src={icon} alt="icon" />
            </div>
          </div>
          <div id="title">
            <p>weather forecast</p>
            <h1>Storm with Heavy Rain</h1>
          </div>
          <div id="forecast">
            <h3>7-Day Forecast</h3>
            <div id="wrap-forecast">
              <div className="forecast-item">
                <div className="day">Sun</div>
                <div className="icon">
                  <img src={icon2} alt="" />
                </div>
                <div className="temp">23^</div>
              </div>
              <div className="forecast-item">
                <div className="day">Sun</div>
                <div className="icon">
                <img src={icon2} alt="" />
                </div>
                <div className="temp">23^</div>
              </div>
              <div className="forecast-item">
                <div className="day">Sun</div>
                <div className="icon">
                <img src={icon2} alt="" />
                </div>
                <div className="temp">23^</div>
              </div>
              <div className="forecast-item">
                <div className="day">Sun</div>
                <div className="icon">
                <img src={icon2} alt="" />
                </div>
                <div className="temp">23^</div>
              </div>
              <div className="forecast-item">
                <div className="day">Sun</div>
                <div className="icon">
                <img src={icon2} alt="" />
                </div>
                <div className="temp">23^</div>
              </div>
              <div className="forecast-item">
                <div className="day">Sun</div>
                <div className="icon">
                <img src={icon2} alt="" />
                </div>
                <div className="temp">23^</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
