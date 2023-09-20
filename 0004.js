let obj = {
    param1: "Value1",
    param2: 2,
    'param 3': [1,2,3],
    '+-+-4': {
        p1: 1,
        p2: 'a'
    },
    param5: "parametro 6"
}
console.log(obj);
console.log(obj.param1);
console.log(obj.param1);
console.log(obj['param 3']);
console.log(obj['param 3'][0]);
console.log(obj['param 3'][1]);
console.log(obj['+-+-4'].p1);
console.log(obj['+-+-4'].p2);
console.log(obj.param5);
