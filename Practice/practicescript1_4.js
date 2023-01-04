// Json PlaceHolder console log

const commentData = async () =>{
    const url = `https://jsonplaceholder.typicode.com/comments`;
    const res = await fetch(url);
    const data = await res.json();
    commentShow(data)
}

commentData();

const commentShow = (info) =>{
    const p = document.getElementById('comment-section')
    info.forEach((data)=> {
       
        const div = document.createElement('div')
        div.classList.add('design')
       div.innerHTML=`<h3 onclick="detail(${data.id})">${data.name}</h3>`;
       p.appendChild(div)
    });
}

const detail = async (id) =>{
 
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    idShow(data)
}

const idShow=(data)=>{
    const p = document.getElementById('comment')
    const div = document.createElement('div')
    div.classList.add('design-ind')
   div.innerHTML=`<h3 >${data.body}</h3>`;
   p.appendChild(div)
}