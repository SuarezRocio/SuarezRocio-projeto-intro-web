let propostaPizza = document.getElementById("propostaPizza")
const buscador = document.getElementById('search')
const buttonSearch = document.getElementById('btn-search')


mostrarProposta(arraySabores);

function mostrarProposta(arrayProposta) {


  propostaPizza.innerHTML = " ";

  for (const Comida of arrayProposta) {
    let divProposta = document.createElement("div");
    divProposta.className = "menu";
    divProposta.innerHTML = `
  
    <div class="row ul" id="contenedor">
            <div id="containOne">
                <p class="card-text">Nome:${Comida.nome}</p>
                <ul>
                    <li>
                        <img src="../img/${Comida.img}" class="carLd-img-top" alt="...">
                    </li>
                    <li class="list-group-item">Pizza portuguesa ingredientes:${Comida.ingredientes}</li>
                </ul>
                
            </div>
    </div>

		`;
    propostaPizza.appendChild(divProposta)

  }
}

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault()

  buscador.value == "" ? alert("preencha o campo") : mostrarProposta(arraySabores.filter(el => el.nome.toLocaleLowerCase().includes(buscador.value.toLocaleLowerCase())))
})
console.log(buttonSearch)


