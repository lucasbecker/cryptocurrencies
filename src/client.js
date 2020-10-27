const app = document.querySelector('#app');
let apiData;

fetch(`http://localhost:5050/`)
  .then( response => {
    if(!response.ok) throw new Error(`Deu pau na requisição do client-side! Status: ${response.status}`);
    return response.json();
  })
  .then( api => {

    let content = '';
    for(let i=0; i<10; i++){
      let date = api.data[i].first_historical_data;
      date = date.split('T').shift();

      content += `
        <div class="card m-2" >
          <div class="card-body">
            <h3 class="card-title">${api.data[i].name}</h3>
            <p class="card-text">
              <p><strong>Rank atual:</strong> ${api.data[i].rank}</p>
              <p><strong>Simbolo:</strong> ${api.data[i].symbol}</p> 
              <p><strong>Criado em:</strong> ${date}</p>
            </p>
            <a href="#" class="btn btn-primary btn-block">Mais detalhes</a>
          </div>
        </div>
      `
      app.innerHTML = content;
    }
  })
  .catch( error => {
    console.log(error.message);
  });
