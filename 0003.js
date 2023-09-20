var i = 0;
let j = 1;
function myFunction(a) {
    console.log(i*a);
    console.log(j*a);
    i = 10
    j = 11
    return i + j + a;
}
console.log(myFunction(1));