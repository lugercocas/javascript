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
let {nombre, apellidos, edad, dir, peso, estatura, nac, hablar} = persona;
console.log(nombre,apellidos, edad, hablar());

let myArray = [1,2,3,4,5]
let [uno,dos,,, cinco] = myArray
console.log('El Array tiene ${uno}, ${dos}, y ${cinco} elementos');
console.log(`El Array tiene ${uno}, ${dos}, y ${cinco} elementos`);
