let persona = {
    nombre: "Luis Miguel",
    apellidos: 'Castro Silva',
    edad: 33,
    'dirección': 'Carrera 33 #26B-33',
    peso: 71,
    estatura: 1.72,
    nacionalidad: 'Colombiano'
}

let andres = persona
andres.nombre = "Andres Anaya"
console.log(persona.nombre); // RTA: Andres Anaya