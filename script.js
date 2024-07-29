/**
 * Initialize
 */

const weather_icon = document.querySelector(".weather_img");
const weather_icon_2 = document.querySelector(".weather_img_2");
let input = document.querySelector('.search_bar');
const temprature_c = document.querySelector('.temp');
const feel= document.querySelector('.Feelslike');
const weather_text_html = document.querySelector('.season');
const heatidx = document.querySelector('.heat');
const humid = document.querySelector('.humid');
const wind_html = document.querySelector('.wind');
const time_txt = document.querySelector('.time');
const city_txt = document.querySelector('.city_text')
const body = document.querySelector('body')
const line = document.querySelector('.line_1');

const url = 'http://api.weatherapi.com/v1';





let search = document.querySelector('.search_icon');

search.addEventListener('click', ()=> {
    let myLocation = `${input.value}`
    console.log(myLocation);
    const requrl = `${url}/current.json?key=b7b926c6fabd40a18e071654241607&q=${myLocation}`
    fetch(requrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        //intializing variables

        const temp = data.current.temp_c;
        const icon = data.current.condition.icon;
        const weather_text = data.current.condition.text;
        const feelslike = data.current.feelslike_c;
        const wind = data.current.wind_kph;
        const humidity = data.current.humidity;
        const heat = data.current.heatindex_c;
        const city = data.location.region;
        const time = data.location.localtime;
        const rain = 'rain'

        //working

        weather_icon.src = `${icon}`;
        weather_icon_2.src = `${icon}`;

        temprature_c.innerHTML = temp;
        feel.innerHTML = `Feelslike: ${feelslike}`
        weather_text_html.innerHTML = `${weather_text}`

        heatidx.innerHTML = `Heat Index : ${heat}°`
        humid.innerHTML = `Humidity : ${humidity}`
        wind_html.innerHTML = `Wind : ${wind}kmph`

        time_txt.innerHTML = `LocalTime : ${time}`
        city_txt.innerHTML = `City : ${city}`

        line.style.opacity = 1;

        // console.log(weather_text);
        // if (weather_text.indexof(rain) !== -1) {
        //     body.style.backgroundImage = "url(./Assets/Baarish.jpg)"
        // }

    })
    .catch(error => console.error('Error:', error));

    
})









