let weather = {
  apiKey: "c8c26a9e9a70d035d10313f3f21eb2c0",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        "columbus" +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    // const { icon, description } = data.weather[0];
    const { temp } = data.main;
console.log(temp);
    document.getElementById('weather').innerText = temp + "°F";

  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};


weather.fetchWeather("Columbus");
