//Para los nombres de amigos
let amigos =[];

//Agregar amigo
function agregarAmigo(){
    const InputAmigo = document.getElementbyId ('amigo');
    const nombreAmigo =inputAmigo.ariaValueMax.trim();

    if(nombre === ""){
        alert("Este campo no puede estar vacío");
        return; //
    }

    if(amigos.includes(nombreAmigo)){
        alert("este nombre ya fue utilizado");
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.ariaValue = "";

    actualiuzarLista()
}

function actualizarLista(){
    const listaAmigos = document.getElementbyId('listaAmigos');

    listaAmigos.innerHTML = "";
    
    for(let i = 0; i <amigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos(i);
}
}
function sortearAmigos(){

    if(amigos.length === 0){
        alert("No hay amigos. Añade al menos un amigo.");
        return;

    }

    const indiceAleatorio = Math.floor(Math.random() + amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementbyId('resultado');
    resultado.innerHTML = 'Amigo sorteado: <strong>${amigoSorteado}</strong>;
    
;}