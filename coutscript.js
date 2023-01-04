const loadCountry = ()=>{
 fetch('https://restcountries.com/v2/all')
 .then(res=>res.json())
 .then(data=>showList(data))
}
loadCountry();

const showList=countries=>{
    const countriesdiv = document.getElementById('country');
    countries.forEach(country=>{
      const div = document.createElement('div')
      div.classList.add('country');
      div.innerHTML=`
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onClick="showDetails('${country.name}')">Details</button>
      `
      countriesdiv.appendChild(div)
   

    });
}

const showDetails = name =>{
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>countryDetail(data[0]))
}

const countryDetail = count =>{
  
  const countryDiv = document.getElementById('country-detail')
  countryDiv.innerHTML = `
  <h5>${count.name}</h5>
  <p>Population: ${count.population}</p>
  <img src="${count.flag}" >
  `
  
}