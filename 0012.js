//uso de arguments. Contiene los parámetros por defecto
function sum() {
    let element = 0;
    for (let i = 0; i < arguments.length; i++) {
        element = element+ arguments[i];
    }
    return element
}
sum(1)
sum(1,2)
sum(1,2,3)
sum(1,2,3,4)

// Parametro rest, es similar a argument. Contiene todos los argumentos
function suma(...nums) {
    let element = 0;
    for (let i = 0; i < nums.length; i++) {
        element = element+ nums[i];
    }
    return element
}
suma(1)
suma(1,2)
suma(1,2,3)
suma(1,2,3,4)