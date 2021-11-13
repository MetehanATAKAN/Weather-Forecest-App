import React, { useContext } from 'react'
import { Weathercontext } from '../context/WeatherContext';
import "../index.css";

function WeatherMainPage() {
    const context = useContext(Weathercontext);

    const focuss = (e) => {
        return e.target.value.length
    }

    const degis = (e) => {
        context.setCity(
            e.target.value.length
        )
    }

    return (
        <>
            {
                (context.Weather.length === 0
                    ? <div className="weather-main">
                        <div className="weather-header">
                            <h1>HAVA DURUMU</h1>
                            <input type="text" id="searchBar" placeholder="Şehir Adı Giriniz" autoComplete="off" onFocus={focuss} onChange={degis} autoFocus ></input>
                            {
                                context.city === 0
                                    ? <button onClick={() => context.bar(document.querySelector("#searchBar").value)} disabled>ŞEHİR ARA</button>
                                    : <button onClick={() => context.bar(document.querySelector("#searchBar").value)} >ŞEHİR ARA</button>
                            }
                        </div>
                        <div className="weather-content">
                            <div className="city"></div>
                            <div className="temp"></div>
                            <div className="desc"></div>
                            <div className="minmax"></div>
                        </div>
                    </div>
                    :
                    <div className="weather-main">
                        <div className="weather-header">
                            <h1>HAVA DURUMU</h1>
                            <input type="text" id="searchBar" placeholder="Şehir Adı Giriniz" autoComplete="off" required="required" />
                            <button onClick={() => context.bar(document.querySelector("#searchBar").value)} >ŞEHİR ARA</button>
                        </div>
                        <div className="weather-content">
                            <div className="city">{context.Weather.name + "  |  " + context.Weather.sys.country}</div>
                            <div className="temp">{context.Weather.main.temp + "°C"}</div>
                            <img className="icon" src={`http://openweathermap.org/img/w/${context.Weather.weather[0].icon}.png`} alt="weather-icon" />
                            <div className="desc">{context.Weather.weather[0].description}</div>
                            <div className="minmax">{context.Weather.main.temp_min + "°C / " + context.Weather.main.temp_max + "°C"}</div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default WeatherMainPage;