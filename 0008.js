function Persona(nombre,apellido) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.hablar = function () {
        return 'Hello, my name is ' + this.nombre + ' ' + this.apellido;
    }
}

let lili = new Persona('Lili Andrea','Alvares');
console.log(lili.hablar()); // Hello, my name is Lili Andrea Alvares

let andre = new Persona();
console.log(andre.hablar()); // Hello, my name is undefined undefined
andre.nombre = "Andre Miguel"
andre.apellido = "Caminu Olibe"
console.log(lili.hablar()); // Hello, my name is Lili Andrea Alvares
console.log(andre.hablar()); // Hello, my name is Andre Miguel Caminu Olibe