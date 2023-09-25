// Arrow funcions
function suma(a,b) {
    return a+b;
}
console.log(suma(1,3));
const func1 = (...nums) => nums[0]+nums[1];
console.log(func1(1,2));
//const func2 = () => {return arguments[0]+arguments[1]}; // Error, no existe
//console.log(func2(2,2));
const func3 = (name='Luis',apellido,...others) => {
    console.log(`Hola ${name} ${apellido}, tu número es: ${others[0]}`);
}
func3()
func3('Castro',13)
func3('Luis','Castro',13)

