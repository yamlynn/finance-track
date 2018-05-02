
//daily budget
let db = 32;

//daily spending
let ds = 0;

//past spending
let arr = [];

//total spent
let sum = 0;

const excess = (spent) => {
    var elem = document.getElementById('sum')
    sum += ds - db;
    arr.push(sum);
    
}
