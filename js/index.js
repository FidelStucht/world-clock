function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonTime.format(
    "h:mm:ss"
  )} <small>${londonTime.format("A")}</small>`;
}
setInterval(updateLondonTime, 1000);

function updateMunichTime() {
  let munichElement = document.querySelector("#munich");
  let munichDateElement = munichElement.querySelector(".date");
  let munichTimeElement = munichElement.querySelector(".time");
  let munichTime = moment().tz("Europe/Lisbon");
  munichDateElement.innerHTML = munichTime.format("MMMM Do YYYY");
  munichTimeElement.innerHTML = `${munichTime.format(
    "h:mm:ss"
  )} <small>${munichTime.format("A")}</small>`;
}
setInterval(updateMunichTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesSelectElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
