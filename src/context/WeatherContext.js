import React, { createContext,useState } from 'react'
export const Weathercontext=createContext();

 function WeatherContext({children}) {

    const url="https://api.openweathermap.org/data/2.5/weather?";
    const key="6236c2c8f7caf2674d06f8ea75492198";
    
    const [Weather, setWeather] = useState([]);
    const [city, setCity] = useState(0);

     const bar=(cityName)=> {
         
         QueryResult(cityName);
     }
    
      const QueryResult=(cityName)=> {
        let result=`${url}q=${cityName}&appid=${key}&units=metric&lang=tr`
          
        fetch(result)
        .then(response=>response.json())
        .then(data=>{
                     
                if( data.name.length===cityName.length ) {                   
                    setWeather(data);
                }                                   
        })
        .catch(err=>alert("asgsdhsh"))          
      }
         
    return (
        <>
            <Weathercontext.Provider value={{Weather,bar,city,setCity}}>
                    {children}
            </Weathercontext.Provider>
        </>
    )
}
export default WeatherContext;