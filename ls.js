let acccion = "";
let verificacion = true;
let numero = 0 ;
let i = 5 ;
//let contactosAmostrar = "";
let items = 0;
let fin = "";
const listaContactos = {
    Contacto1 : "Luis Antonio",
    Contacto2 : "Robert Guerra",
    Contacto3 : "Jose Najera",
    Contacto4 : "Luis Hernandez Goenaga"
}
mostarlista();
do {
    do {
        if(!verificacion){
            alert('Digita una opcion valida')
        }
        acccion = prompt("Accion,\nIngrese el numero 1 para guardar,\nIngrese el numero 2 para eliminar,\nIngrese el numero 3 para modificar", "");
        if (isNaN(acccion)) {
            verificacion = false;
        }else{
            verificacion = true ;
            numero = parseInt(acccion);
            if (numero > 3 || numero < 1 || acccion == '') {
                verificacion = false;
            }
        }
    } while (!verificacion);

    let contacto = "";
    let newcontacto = "";
    switch (numero) {
        case 1:
            contacto = prompt("Ingrese el contacto que desea agregar");
            guardar(contacto);
            break;
        case 2:
            contacto = prompt("Ingrese el contacto que desea eliminar");
            eliminar(contacto);
            break;
        case 3:
            contacto = prompt("Ingrese un número para modificar");
            newcontacto = prompt("Ingrese modificación");
            modificar(contacto, newcontacto);
            break;
    }
    fin = prompt("Desea terminar,\n Digite si/no,", "");
} while (fin != 'si' );
function guardar (contactoGuardar) {
    listaContactos["Contacto"+i] = contactoGuardar;
    i++;
    mostarlista();
}
function eliminar(contactoEliminar) {
    delete listaContactos[contactoEliminar];
    mostarlista();
}
function modificar(contactoModificar, newcontac) {
    listaContactos[contactoModificar] = newcontac;
    mostarlista();
}
function mostarlista() {
/*  contactosAmostrar = "";
    items = Object.values(listaContactos);
    for (let i = 1; i < items.length + 1; i++) {
        if(listaContactos["Contacto"+i] != undefined ){
            contactosAmostrar += listaContactos["Contacto"+i]+" \n";
        }
    }
    alert(contactosAmostrar); */
    console.log(listaContactos)
}