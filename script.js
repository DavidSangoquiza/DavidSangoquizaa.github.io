
const formulario = document.getElementById('formulario'); //Obtiene el documento con el ID
const registro = document.getElementById('registro'); //Obtiene el documento con el ID para mensaje de registro
const exito = document.getElementById('exito');//Nos ayuda a crear una pagina de registo exitoso de los datos

formulario.addEventListener('submit', async(e) => { e.preventDefault();//Agrega un evento de escucha al formulario cuando se envía 
await fetch('https://sheet.best/api/sheets/3671973e-4b24-4267-843f-4e5a9f6d73ac', { //Accedemos al link de drive con el que se accede
    method: 'POST',//Método que nos va ayudar a enviar los datos
    mode: 'cors',//especifica que la solicitud se realiza utilizando una política de origen cruzado.
    headers: {  // establece las cabeceras de la solicitud.
    'Content-Type': 'application/json' //indica que los datos se enviarán en formato JSON.
    },
    body: JSON.stringify({ //convierte un objeto JavaScript en una cadena JSON
        "NombreDominio": formulario.nombreDominio.value,
        "DireccionIP":formulario.direccionIP.value,
        "DireccionURL":formulario.direccionURL.value,
        "NombreAdmin":formulario.nombreAdmin.value,
        "PaisAdmin":formulario.paisAdmin.value,
        "TelefonoAdmin":formulario.telefonoAdmin.value,
        "CorreoAdmin":formulario.correoAdmin.value,
        "NombreTec":formulario.nombreTec.value,
        "PaisTec":formulario.paisTec.value,
        "TelefonoTec":formulario.telefonoTec.value,
        "CorreoTec":formulario.correoTec.value,
        "NombreServer1":formulario.nombreServer1.value,
        "NombreServer2":formulario.nombreServer2.value,
        "TipoA":formulario.tipoRegistroA.value,
        "Tipo3A":formulario.tipoRegistro3A.value,
        "TipoMX":formulario.tipoRegistroMX.value,
        "TipoPTR":formulario.tipoRegistroPTR.value,
        "Cname":formulario.tipoRegistroCNAME.value,
        "Spf":formulario.tipoRegistroSPF.value,

        

        

    })
    });

    alert('El registro se ha completado exitosamente.');
    formulario.reset();
    registro.classList.remove('activo');//Elimina la clase CSS 'activo' del elemento con el ID "registro".
    exito.classList.add('activo');//grega la clase CSS 'activo' al elemento con el ID "exito".
});