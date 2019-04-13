// Funcion para limpiar la consola
document.getElementById('limpiar').addEventListener('click', function () {
    const consola = document.getElementById('output');
    consola.innerText = "";
});

// Funcion para recibir parametros ingresados
document.getElementById('cifrarBtn').addEventListener('click', function () {
    const texto = document.getElementById('texto').value;

    const mensajeArray = texto.split('');
    console.log('Clave en vector de 330 caracteres: ', getSubstrArray(texto));
    const subsArray = getSubstrArray(texto);
    
    console.log(calcularMcm(subsArray ));
    console.log('Mensaje array = ', mensajeArray);

    //console.log(generarMatrizAbc());

});

function calcularMcd(array) {
    for (i = 0; i < array.length; i++) {
        if (array.length < 2) return false;
        if (array.length == 2) return (array[i] == 0 ? arguments[0] : MCD(arguments[1], arguments[0] % arguments[1]));
        var arr = [].splice.call(arguments, 0);
        arr.splice(0, 2, MCD(arr[0], arr[1]));
        return MCD.apply(window, arr);
    }
}
function calcularMcm(subsArray){
    var mcm = 0;
    for (i = 0; i < subsArray.length; i++) {
        console.log("Imprimiendo: ", subsArray[i]);
        if (subsArray.length < 2) return false;
        if (subsArray.length == 2) return subsArray[i].number * subsArray[i + 1].number / MCD(subsArray[0], subsArray[1]);
        var arr = [].splice.call(subsArray, 0);
        arr.splice(0, 2, mcm(arr[0], arr[1]));
        return mcm.apply(window, arr);
    }
}

function getSubstrArray(message) {
    var arrayTemp = [];
    for (j = 3; j < 7; j++) {
        for (i = 0; i < message.length - j; i++) {
            for (k = i + 1; k < message.length - j; k++) {
                if (message.substr(i, j) == message.substr(k, j)) {
                    var d = k - 1;
                    var name = message.substr(i, j);
                    var obj = {
                        number: d,
                        name: name
                    };
                    arrayTemp = [
                        ...arrayTemp,
                        obj
                    ];
                }
            }
        }
    }
    return arrayTemp;
}

function generarMatrizAbc() {
    var contador = 0;
    var abcTemp = generarAbecedario();
    var abc = new Array();
    for (c = 0; c < 26; c++) {
        abc[c] = abcTemp[c];
        abc[c + 26] = abcTemp[c];
    }
    var matrix = new Array(2);
    matrix[0] = new Array(26);
    matrix[1] = new Array(26);

    for (i = 0; i < matrix.length; i++) {
        contador = 0
        for (k = 0; k < 26; k++) {
            matrix[i][k] = abc[contador * i]
            contador++;
        }
    }

    return matrix;
}

function generarAbecedario() {
    var abc = new Array();
    for (i = 97; i <= 122; i++) {
        abc[i - 97] = String.fromCharCode(i);
    }
    console.log(abc);

    return abc;
}

function getKeyLengh(key) {
    return key.length;
}


function getSubstring(param, lenght) {
    const array = param.substring(0, lenght)
    return array;
}


