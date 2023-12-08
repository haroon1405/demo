console.log("This is mod.js");

function add(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}


//module.exports = add;

module.exports = {
    addition:add,
    name:"Haroon"
};