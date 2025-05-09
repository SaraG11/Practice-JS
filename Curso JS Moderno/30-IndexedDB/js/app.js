document.addEventListener('DOMContentLoaded', () =>{
    crmDB()
})

function crmDB(){
    // crear BD v1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hubo un error
    crmDB.onerror = function (){
        console.log('Hubo un error a la hr de crear la BD');
    }

    // si tuvo exito
    crmDB.onsuccess = function (){
        console.log('Base de datos creada!')
    }

    // Configuracion de la BD 
     crmDB.onupgradeneeded = function (e){
        const db = e.target.result;

        const objectStore = db.createObjectStorre('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })
     }
}