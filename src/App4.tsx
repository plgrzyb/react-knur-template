import { useEffect, useState } from "react";
import { Temperature } from "./Temperature";
import { Wind } from "./Wind";
import { Time } from "./Time";

function App4() {
  const [latitude, setLatitude] = useState("52.52");
  const [longitude, setLongitude] = useState("13.41");
  const [data, setData] = useState();
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  useEffect(() => {
    setInterval(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 60000);
  }, [url, latitude, longitude]);

  if (!data) {
    return "Wczytywanie danych";
  }

  if(data.current.temperature_2m <= -10){
    alert("ale pizga")
  }

  let color = "white";
  if(data.current.temperature_2m >= 10){
    color = "darkred"
  }else if(data.current.temperature_2m >= 0){
    color = "red"
  }else if(data.current.temperature_2m > -10){
    color = "blue"
  }else{
    color = "darkblue"
  }

  return (
    <div style={ {height:"100vh", backgroundColor: color} }>
      <input
        value={latitude}
        type="number"
        placeholder="Latitude"
        onChange={(e) => {
          setLatitude(e.target.value);
        }}
      />
      <input
        value={longitude}
        type="number"
        placeholder="Longitude"
        onChange={(e) => {
          setLongitude(e.target.value);
        }}
      />
      <Temperature
        temperatura={data.current.temperature_2m}
        unit={data.current_units.temperature_2m}
      />
      <Wind
        wind={data.current.wind_speed_10m}
        unit={data.current_units.wind_speed_10m}
        />

      <Time
        time={data.current.time}
      />
    </div>
  );
}

export { App4 };
