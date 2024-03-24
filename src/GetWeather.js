import axios from "axios";

const getWeather = (city) => {
  const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return axios.get(url);
};

export default getWeather;
