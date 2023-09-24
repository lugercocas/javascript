let names = ['Luis', 'Karen', 'Lilis', 'Lis', 'Julio','Juli','Liber']
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(i + ' ' +element);
}

names.forEach(name => {
    console.log('*' +name);
});



for (const name of names) {
    console.log('+' +name);
}

for (const name in names) {
    console.log('-' +names[name]);
}

let otherNames = {
    name: 'Luis',
    apellido: 'Castro',
    peso: 15,
    tel: 3213324
}
for (const name in otherNames) {
    const element = otherNames[name];   
    console.log(`${name} is ${element}`); 
}