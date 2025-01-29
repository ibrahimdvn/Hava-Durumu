const url = 'https://api.openweathermap.org/data/2.5/'
const key = '58a532b9573c8acb9c6ba32dc8ec7300'

const setQuery = (e) => {
    if (e.key === 'Enter') {
        getResults(searchBar.value)
    }
}

const getResults = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    }).then(displayResults)
}

const displayResults = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C` 
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)