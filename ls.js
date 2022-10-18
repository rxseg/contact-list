const contactList = [
    {id: 1,
    nombre: "Robert",
    apellido: "Guerra",
    telefono: 42465212554,
    ubicacion:{
        ciudad: "Barranquilla",
        direccion: "49C 75-14"
    }
},
    {id: 2,
    nombre: "Fede",
    apellido: "Valverde",
    telefono: "No tengo ni idea",
    ubicacion:{
        ciudad: "Madrid",
        direccion: "Ni idea"
    }
}
]

const addContact = (contacto = "", id="", apellido="", telefono="", ciudad="", direccion="") =>{
    if(!contacto) return console.warn("No has ingresado ningún contacto");
    if(!id) return console.warn("No has ingresado un identificador");
    if(contacto){
        contactList.push({id : id ,nombre : contacto, apellido, telefono, ubicacion:{ciudad: ciudad, direccion: direccion}});
        console.info(`Has agregado a ${contacto} a la lista`);
        mostrarLista(contactList);
    }
}
const delContact = (contacto, id) =>{
    if(!contacto) return console.warn("No has ingresado ningún contacto");
    if(!id) return console.warn("No has ingresado un identificador");
    
        contactList.map( (element, i) => {
            if (element.nombre === contacto) {
                contactList.splice(i,1);
                console.info(`Has borrado a ${contacto} de la lista`);
                mostrarLista(contactList);
            }
        })
    
}
const modifyList = ( contacto = "", id, apellido="", telefono = "", ciudad = "", direccion ="") =>{
    if(!contacto) return console.warn("No has ingresado un contacto a modificar");
    if(!id) return console.warn("No has ingresado el id del contacto a modificar");
    contactList.forEach( (element, index) => {
        if (element.id === id) {
                const obj={
                    id: id,
                nombre: contacto,
                apellido: apellido,
                telefono: telefono,
                ubicacion:{
                    ciudad: ciudad,
                    direccion: direccion
                }
            }
            contactList.splice(index,1,obj);
            console.info(`Has modificado a ${contacto} de la lista`);
            mostrarLista(contactList);
        }
    
    })

}
function mostrarLista (){
    contactList.forEach((element)=>{
        console.log(element);
    })
}
addContact("Andriy", 3, "Schevchenko", 2151256512, "Kiev", "Ni idea" );
modifyList("Andriy", 3, "Sheva", 555555555, "Malambo", "Donde el diablo dejó los hijos");
delContact("Andriy", 3);
