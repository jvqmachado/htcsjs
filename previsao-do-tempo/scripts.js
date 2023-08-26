const key = "954ca5cd4f1dd72649447f62ee67f84d"

async function srccity(city) {
    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}")
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())

    console.log(data)
}

function clickButton() {
    const city = document.querySelector(".input-city").value 

    srccity(city)
}