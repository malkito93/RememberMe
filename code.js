const formulario = document.getElementById('formulario');
const listaTareas = document.getElementById('listaTareas');

let arrayaNotas =[];

// Funcion Crear item

const CrearItem = (tarea, descripcion, fecha)=>{
    
    let item = {
        notas: tarea,
        descripcion: descripcion,
        fecha1: fecha,
        estado : false
    }

    arrayaNotas.push(item);
    return item;

}

// Funcion guardar en localstorage

const GuardarRutina = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayaNotas));

    PintarRutinas();
}

// Pintar rutinas
const PintarRutinas = () => {
    
    listaTareas.innerHTML ='';
 
    arrayaNotas = JSON.parse(localStorage.getItem('rutina'));
    
    if (arrayaNotas === null) {
        arrayaNotas = [];
        
    }else {
        arrayaNotas.forEach(element => {
            listaTareas.innerHTML +=`<div class="alert alert-success" role="alert"><span class="material-symbols-outlined">save</span><b>${element.notas}</b><p id="descripcionTexto"> ${element.descripcion}</p><div style="display: flex;justify-content: end; cursor: pointer;"><p>${element.fecha1}</p><span class="material-symbols-outlined">done</span><span class="material-symbols-outlined">delete</span></div></div>`
        });
    }
}
// console.log(arrayaNotas)
// Event listener

formulario.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    // captar input
    let titulo = document.getElementById('entrada').value;
    let inputDescripcion = document.getElementById('inputDescripcion').value;
    let fecha = document.getElementById('fecha').value
    
    CrearItem(titulo,inputDescripcion,fecha)
    GuardarRutina();

    
    // guardarTexto();
    formulario.reset();
    location.reload();
    
})

document.addEventListener('DOMContentLoaded', PintarRutinas());

listaTareas.addEventListener('click', (e) =>{

    e.preventDefault()
    
    if( e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
        
        console.log(e.target.innerHTML)
        console.log(e.path[2].childNodes[1].innerHTML);
    };
});

// Notas sobre Git

/**
git init (para iniciar git) Debe salir una U
git add . (agrega archivos) debe salir con una A
git commit -m "mensaje aqui"
git remote add origin "link"
 */