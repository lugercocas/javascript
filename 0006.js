let persona = {
    nombre: "Luis Miguel",
    apellidos: 'Castro Silva',
    edad: 33,
    'dirección': 'Carrera 33 #26B-33',
    peso: 71,
    estatura: 1.72,
    nacionalidad: 'Colombiano',
    hablar: function () {
        return "Hi, i am "+this.nombre+" "+this.apellidos
    }
}
console.log(persona.hablar()); // RTA: Hi, i am Luis Miguel Castro Silva