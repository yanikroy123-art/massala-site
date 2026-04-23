let lista = document.getElementById('lista-frutas');
let frutas = JSON.parse(localStorage.getItem('frutas')) || [];

frutas.forEach(f => {
 let div = document.createElement('div');
 div.className = 'card';
 div.innerHTML = `
  <img src="${f.imagem}">
  <div class="card-content">
   <h3>${f.nome}</h3>
   <p><strong>Origem:</strong> ${f.origem}</p>
  </div>
 `;
 lista.appendChild(div);
});
