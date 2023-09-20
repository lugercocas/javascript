function Persona() {
    this.nombre = 'Luis',
    this.apellido = 'Castro',
    this.hablar = function () {
        return 'Hello, my name is ' + this.nombre + ' ' + this.apellido;
    }
}
let luis = new Persona();
console.log(luis.nombre);
console.log(luis.apellido);
console.log(luis.hablar());

let andres = new Persona();
andres.nombre = 'Andres Peli'
andres.apellidos = 'Cocua Manu'
console.log('Validando objeto');
console.log(luis.hablar());
console.log(andres.hablar());