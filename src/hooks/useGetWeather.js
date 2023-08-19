import { useState, useEffect } from "react";

import { WEATHER_API_KEY } from "@env";

import * as Location from "expo-location";

//https://openweathermap.org/api
export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [currWeather, setCurrWeather] = useState([]);
  const [lat, setLat] = useState(35.4676);
  const [lon, setLon] = useState(-97.5164);
  const fetchWeatherData = async () => {
    try {
      //Get the current weather
      const res1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
      );
      const data1 = await res1.json();
      setCurrWeather(data1);

      //Get the 5 day forecast
      const res2 = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
      );
      const data2 = await res2.json();
      setForecast(data2);
    } catch (e) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  // Get the location of the user - expo geolocation
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      //if access is granted to location => get specific location to get local weather, else it defaults to OKC
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});

        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
      }

      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, currWeather, forecast];
};
