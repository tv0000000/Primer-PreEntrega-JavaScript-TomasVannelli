alert("Bienvenidos! al calculador de edad promedio");

// Constantes
const usuarioAutorizado = "Tom";
const contraseniaAutorizada = 1212;

// Validar Usuario
for (let i = 0; i < 4; i++) {
    let usuarioIngresado = prompt("Ingrese su usuario");
    let contraseniaIngresada = parseInt(prompt("Ingrese su contraseña"));

    if (usuarioIngresado === usuarioAutorizado && contraseniaIngresada === contraseniaAutorizada) {
        alert("Bienvenido " + usuarioAutorizado);
        break;
    } else { alert("Usuario o contraseña incorrectos vuelva a intenarlo") };
}

// Calculador Promedio Edad
for (let i = 0; i < 10; i++) {
    let personasCantidad = parseInt(prompt("Ingrese la cantidad de personas a calcular promedio de edad (máximo 3 pesonas)"));
    if (personasCantidad <= 1) {
        alert("Debes ingresar al menos 2 personas para poder calcular el promedio, vuele a intentarlo");
    }
    if (personasCantidad >= 4) {
        alert("Ingresaste más de 3 personas, vuele a intentarlo");
      }

    else if (personasCantidad === 2) {
        let personaUno = prompt("Ingrese el nombre de la primer persona ");
        let edad1 = parseInt(prompt("Ingrese su edad"));
        let personaDos = prompt("Ingrese el nombre de la segunda persona ");
        let edad2 = parseInt(prompt("Ingrese su edad"));
        let promedio2 = calcularPromedio2(edad1, edad2);
        alert("El promedio de " + personaUno + ", " + personaDos + " es " + promedio2);
        alert("Muchas gracias por usar el calculadord de promedios, adios!!!");
        break
    }
    else if (personasCantidad === 3) {
        let personaUno = prompt("Ingrese el nombre de la primer persona ");
        let edad1 = parseInt(prompt("Ingrese su edad"));
        let personaDos = prompt("Ingrese el nombre de la segunda persona ");
        let edad2 = parseInt(prompt("Ingrese su edad"));
        let personaTres = prompt("Ingrese el nombre de la tercer persona ");
        let edad3 = parseInt(prompt("Ingrese su edad"));
        let promedio3 = calcularPromedio3(edad1, edad2, edad3);
        alert("El promedio de " + personaUno + ", " + personaDos + " y " + personaTres + " es " + promedio3);
        alert("Muchas gracias por usar el calculador de promedios, adios!!!");
        break
    }
}

// Funciones

function calcularPromedio3(edad1, edad2, edad3) {
    return (edad1 + edad2 + edad3) / 3;
}

function calcularPromedio2(edad1, edad2) {
    return (edad1 + edad2) / 2;
}


