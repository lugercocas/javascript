let names = ['Luis', 'Karen', 'Lilis', 'Lis', 'Julio','Juli','Liber']
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(i + ' ' +element);
}

names.forEach(name => {
    console.log('*' +name);
});

for (const name in names) {
    console.log('-' +names[name]);
}

for (const name of names) {
    console.log('+' +name);
}