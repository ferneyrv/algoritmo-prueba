function algortimo() {
    // Leer datos desde la entrada usando prompt
    const tamanioLista = parseInt(prompt("Ingrese el tamaño de la lista de números:"), 10);
    const ordenarLista = prompt("Ingrese la lista de números ordenados, separados por espacios:").split(' ').map(Number);
    const numeroConsultas = parseInt(prompt("Ingrese el número de consultas:"), 10);
    const consultas = prompt("Ingrese las consultas, separadas por espacios:").split(' ').map(Number);
    ejecutarConsultas(consultas, ordenarLista);
    
}

function busquedaNumeros(num, ordenarLista) {
    let menor = 'X';
    let mayor = 'X';

    for (let i = 0; i < ordenarLista.length; i++) {
        if (ordenarLista[i] < num) {
            menor = ordenarLista[i];
        } else if (ordenarLista[i] > num) {
            mayor = ordenarLista[i];
            break;
        }
    }
    return [menor, mayor];
}

function ejecutarConsultas(consultas, ordenarLista){
    // Realizar consultas
    consultas.forEach(consulta => {
    const [menor, mayor] = busquedaNumeros(consulta, ordenarLista);
    console.log(`${menor} ${mayor}`);
});
}


// cuando este listo el documento ejecutar funcion algoritmo
window.onload = function() {
    algortimo();
}

