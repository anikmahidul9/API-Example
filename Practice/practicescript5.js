const randomUser = async () =>{
    const url = `https://randomuser.me/api/?results=50`;
    const res = await fetch(url);
    const data = await res.json();
    showUser(data.results);
}
randomUser();

const showUser=(data)=>{
   
    const divField = document.getElementById('item-show');
   data.forEach(user=>{
    console.log(user);
   
       const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div class="card" style="width: 18rem;">
  <img src="${user.picture.medium
  }" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${user.name.title} ${user.name.first}</h4>
    <p class="card-text">State:${user.location.state} Country: ${user.location.country} Timezone:${user.location.timezone.description}</p>
   
  </div>
</div>`
divField.appendChild(div); 
   })
}
