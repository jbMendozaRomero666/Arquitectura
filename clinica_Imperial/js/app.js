import {
  SPACE_ID,
  ACCESS_TOKEN
} from "../setup/credentials.js";

const endpoint = "https://graphql.contentful.com/content/v1/spaces/" + SPACE_ID;

const query = `{
  headerImgCollection {
    items {
      sys {
        firstPublishedAt
        id
      }
      
      img {
        url
        title
        width
        height
        description
      }
      
    }
  }
}`;


// Here are our options to use with fetch
const fetchOptions = {
  method: "POST",
  mode:'cors',
  headers: {
    Authorization: "Bearer " + ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query
  }),
};

// Let's fetch the data - check out the browser console!
fetch(endpoint, fetchOptions)
  .then(response => response.json())
  .then(data => console.log(data));


const imagen  = document.createElement('img');
      imagen.classList.add('card-img');


const renderItems = (items) => {
  items.forEach((item) => {
   

    const div = document.createElement('DIV');
    div.classList.add('card');
    const img = document.createElement('IMG');
    img.src = `${item.img.url}`;
    img.classList.add('card-img');
    div.appendChild(img);
    const h5 = document.createElement('H5');
    h5.textContent = `${item.img.description}`;
    div.appendChild(h5);
    const p = document.createElement('P');
    p.innerHTML = '$';
    const small = document.createElement('SMALL');
    small.classList.add('precio');
    small.innerHTML = '40';
    p.appendChild(small);
    div.appendChild(p);
    const a = document.createElement('A');
    a.href = '#';
    a.classList.add('button');
    a.classList.add('agregar-carrito');
    a.innerHTML = 'Comprar';
    
    a.setAttribute("data-id",`${item.sys.id}`);
    div.appendChild(a);

    const listaproductos = document.querySelector('#lista-productos');

     listaproductos.appendChild(div);

     
    // console.log(listaproductos);
  });
};

fetch(endpoint, fetchOptions)
  .then((response) => response.json())
  .then((data) => renderItems(data.data.headerImgCollection.items));