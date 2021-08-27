const loadCountry = () => {
    const inputField = document.getElementById("input-field");
    const getText = inputField.value;
    inputField.value = '';

    const url = `https://coronavirus-19-api.herokuapp.com/countries/${getText}`

    fetch(url)
        .then(res => res.json())
        .then(data => showCountry(data))
}

const showCountry = status => {
    const showItem = document.getElementById("show-item");
    showItem.textContent = '';
    const div = document.createElement('div');
    div.classList.add('background');
    div.innerHTML = `
        <h1 class="mt-5 text-white fw-bold fs-1">${status.country}</h1> </br>
        <h4 class="text-white">Cases : ${status.cases}</h4></br>
        <h4 class="text-white">TodayCases : ${status.todayCases}</h4></br>
        <h4 class="text-white">Total Deaths : ${status.deaths}</h4></br>
        <h4 class="text-white">Today Deaths : ${status.todayDeaths}</h4></br>
        <h4 class="text-white">Recovered : ${status.recovered}</h4>`
    showItem.appendChild(div);
}