
// PEDIR DATOS AL PACIENTE

function pedirdatos(datoapedir){

    const paciente = []

    for(let i = 0; i < datoapedir.length; i++){

        let dato

        if(datoapedir[i] === "edad" || datoapedir[i] === "DNI"){
            do {
                dato = prompt("Ingrese " + datoapedir[i] + "(solo números): ")
                dato =parseInt(dato)
            }
            while (isNaN(dato))
            }
            else {
                dato = prompt("Ingrese " + datoapedir[i]+ ": ") 
            }

        paciente.push(dato)

    }

    return paciente
}


const datoapedir = ["nombre","apellido","edad","DNI","obra social","motivo de consulta"]



// HORARIOS

const horariosdisponibles= ["9am","9:30am","10am","10:30am","11am","11:30am","12am"]

function seleccionarhorarios(horarios){

    let mensaje = "Seleccione horario de preferencia: \n \n"

    for(i=0; i < horarios.length;i++){

        mensaje += (i + 1) + ". " + horarios[i] + "\n"

    }

    mensaje += (horarios.length + 1) + ". Cancelar"

    const opcion = parseInt(prompt(mensaje))

    if (opcion === horarios.length + 1){
        return null
    }

    else { 
        return horarios[opcion-1]
    }

}


// CONFIRMACION DEL TURNO

function confirmacion(tempPaciente, tempHorarioelegido){

    let mensajeconfirmacion =
        "Datos del paciente:\n \n" +
        "Nombre: " + tempPaciente[0] + "\n" +
        "Apellido: " + tempPaciente[1] + "\n" +
        "Edad: " + tempPaciente[2] + "\n" +
        "DNI: " + tempPaciente[3] + "\n" +
        "Obra Social: " + tempPaciente[4] + "\n" +
        "Motivo: " + tempPaciente[5] + "\n \n"
    

        if ( tempHorarioelegido !== null){
        mensajeconfirmacion += "Horario seleccionado: " + tempHorarioelegido

        }

        else{
            mensajeconfirmacion += "Turno cancelado ❌"
            
        }

    let respuesta = confirm(mensajeconfirmacion.toUpperCase() + "\n \n Desea confirmar el turno?")

    if (respuesta){
        alert("✅ Su turno ha sido confirmado.")
        return true
    }

    else {
        alert("❌ Su turno ha sido cancelado.")
        return false
    }

}

// MOSTRAR TURNO

function mostrarturno(){
    let datosdelturno = 

        "Datos del paciente:\n \n" +
        "Nombre: " + paciente[0] + "\n" +
        "Apellido: " + paciente[1] + "\n" +
        "Edad: " + paciente[2] + "\n" +
        "DNI: " + paciente[3] + "\n" +
        "Obra Social: " + paciente[4] + "\n" +
        "Motivo: " + paciente[5] + "\n \n" +
        "Horario seleccionado: " + horarioelegido

    alert(datosdelturno.toUpperCase())

}



// MENU
let paciente = 0
let horarioelegido =0
let menu = 0

while ( menu != 3){

    menu= parseInt(prompt(

        "Menú: \n \n" +

        "1. Sacar turno \n"+
        "2. Mostrar turno \n" +
        "3. Salir"
        ))

    switch (menu){

        case 1:
            const tempPaciente = pedirdatos(datoapedir)
            const tempHorarioelegido = seleccionarhorarios(horariosdisponibles)

            if (tempHorarioelegido !==null){
                const confirmado = confirmacion(tempPaciente, tempHorarioelegido)
                
                if  (confirmado) {
                    paciente = tempPaciente
                    horarioelegido= tempHorarioelegido
                }    

            }
            else{
                alert("❌ Selección de turno cancelada. Volviendo al menú.")
            }
            break
        
        case 2:
            if (!paciente){
                alert("⚠️ No hay datos de paciente. Primero saque un turno.")
            }

            else{
                mostrarturno()
            }

            break

        case 3:
            alert("Usted ha salido del programa. Si quiere sacar turno vuelva a ingresar.")

            break

        default:
            alert("Opción invalida. Vuelva a intentar")



    }


}