let menu = document.getElementById("listaPizzas")
const pizzasEscholido = document.getElementById("pizzasEscholido");
const agregados = document.getElementById("agregados");
const precoTotal = document.getElementById("precoTotal");
let Carrito = []





mostrarProducto(arraySabores);



function mostrarProducto(array) {


	menu.innerHTML = " ";

	for (const Pizza of array) {
		let div = document.createElement("div");
		div.className = "menu";
		div.innerHTML = `
			<div class="boxDobleArticle">
			 <h3>${Pizza.nome}</h3>
			  <p>contiene: ${Pizza.ingredientes}</p>
			 <figure><img src="./multimedia/${Pizza.img}" alt="Image"> </figure>
			  <div class="inner">
			  <ul>
				<li>es: ${Pizza.Categoria}</li>
				<li>Veggie? <span>${Pizza.Vegetariano}</span> </li>
				<li>Preco:<span> ${Pizza.preco}</span> </li>
			  </ul>
				<div class='contenedorSumar'>			  
			 
			 
			  </div>
			  </div>
				<button class="btnAdd" id="agregar${Pizza.id}">Adicionar pizza</button>
		</div>
		</div>
		`;

		menu.appendChild(div);
		let botonAdicionar = document.getElementById(`agregar${Pizza.id}`)
		botonAdicionar.addEventListener("click", () => {
			adicionarProducto(Pizza.id)
			alert("Producto Adicionado!!!")
		})
		let mostrador = document.getElementById('mostrador')

	}

}


function adicionarProducto(id) {
	let adicionar = Carrito.find(item => item.id == id)
	if (adicionar) {
		adicionar.Cantidad = adicionar.Cantidad + 1
		document.getElementById(`numero${adicionar.id}`).innerHTML = `
		
		<p id="numero${adicionar.id}">numero: ${adicionar.Cantidad}</p>			
		`
		actualizarCarrito()
	} else {

		let pizzaAdicionar = arraySabores.find(elemento => elemento.id == id)
		Carrito.push(pizzaAdicionar)
		let div = document.createElement("div")
		div.className = "contenedorCarrito"
		div.innerHTML = `
		
		
			<div class=" cardCarrito">
			<ul>
				<li class="submenu">
					<div>
						<table id="lista-carrito" class="u-full-width">
							<thead>
								<tr>
								  <img src="./img/${pizzaAdicionar.img}" class="foto-carrito"/>
									<th>Nome:${pizzaAdicionar.nome}</th>
									<th>Preco:${pizzaAdicionar.preco}</th>
									<th id="numero${pizzaAdicionar.id}">Cantidad:${pizzaAdicionar.Cantidad}</th>
									<th></th>
								</tr>
							</thead>
						</table>
						<button id="retirar${pizzaAdicionar.id}">Retirar</button>
					</div>
				</li>
			</ul>
		</div>		 
	`
		pizzasEscholido.appendChild(div);
		console.log("agregado")

		let retirarProducto = document.getElementById(`retirar${pizzaAdicionar.id}`)
		retirarProducto.addEventListener("click", () => {
			alert(pizzaAdicionar.nome + " eliminado");
			console.log(retirarProducto.parentElement.parentElement.parentElement.parentElement)
			retirarProducto.parentElement.parentElement.parentElement.parentElement.remove();
			Carrito = Carrito.filter(elemento => elemento.id != pizzaAdicionar.id);
			actualizarCarrito()
			localStorage.setItem("contenedorCarrito", JSON.stringify(Carrito));
		})

	}
	localStorage.setItem("contenedorCarrito", JSON.stringify(Carrito));
}



function salvar() {
	let salvarStorage = JSON.parse(localStorage.getItem('contenedorCarrito'))

	if (salvarStorage) {
		salvarStorage.forEach(elemento => {
			adicionarProducto(elemento.id)

		});
	}
}
salvar();


