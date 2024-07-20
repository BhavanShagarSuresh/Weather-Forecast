// const apikey = "02263f4f25a2847541c3b31e9b7a743a";
async function display() {
    var city = document.getElementById("input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat={lat}&lon={lon}&appid=02263f4f25a2847541c3b31e9b7a743a&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      console.log("API FETCH ERROR");
    } else {
      const data = await response.json();
      var result = document.getElementById("result");
      var result1 = document.getElementById("result1");
      var weatherImage = document.getElementById("weatherImage");
      var body = document.body;
      const temp = data.main.temp;
      const country = data.sys.country;
      const weatherCondition = data.weather[0].main;
      result.innerHTML = `${temp}°C`;
      result1.innerHTML = `${country}`;
      switch (weatherCondition) {
        case "Clear":
          weatherImage.src = "sun.png";
          body.style.backgroundImage = "url(pex5.jpg)";
          break;
        case "Clouds":
          weatherImage.src = "cloud1.png";
          body.style.backgroundImage = "url(pex4.jpg)";
          break;
        case "Rain":
          weatherImage.src = "rainy.jpg";
          body.style.backgroundImage = "url(pex3.jpg)";
          break;
        case "Snow":
          weatherImage.src = "snow-clipart-4.png";
          body.style.backgroundImage = "url(pex2.jpg)";
          break;

        default:
          weatherImage.src = "clipart-sunny-1.png";
      }

      console.log(data);
    }
  }