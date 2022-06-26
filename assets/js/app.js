console.log('Listado de Personas');

const personas = [
   /*  new Persona('Raúl', 'Parra'),
    new Persona('Paulina', 'López') */
]

function mostrarPersonas(){
    let texto = "";
    for(let persona of personas){
        console.log(persona)
        texto += `<li> ${persona.nombre} ${persona._apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}
document.getElementById('btn').addEventListener('click',()=>{
    const formulario =  document.forms['formulario'];
    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona (nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas()
    }
})