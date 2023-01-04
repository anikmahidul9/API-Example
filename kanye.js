const loadQuote = async ()=>{
    const url =('https://api.kanye.rest/')
    const res = await fetch(url)
    const data = await res.json();
    showQuote(data);
    
}

const showQuote = (data) =>{
    const quoteElement = document.getElementById('quote');
     quoteElement.innerText=data.quote;
}

const randomUser = ()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res=>res.json())
    .then(data=>showUser(data));
}

const showUser = (data) =>{
    const div = document.getElementById('user');
    const users=data.results;
    for(let user of users ){
        
        const p = document.createElement('p');
        p.innerText=`Name: ${user.name.first} ${user.name.last} Email:${user.email}`;
        div.appendChild(p);
    }
}