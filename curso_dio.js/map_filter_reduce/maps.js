/*const maca= {
    value: 2,
}

const laranja= {
    value: 3,
}



function mapComThis(arry, thisArg) {
    return arry.map(function(item){
       return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja' ,mapComThis(nums, laranja)); 

function mapSemThis(arry) {
   return arry.map(function(item) {
        return item* 2;
    } );
}


const nums =[2, 4, 6, 8, 10];

console.log(mapSemThis(nums)); */

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback (item) {
    return item %2 !== 0;
}


const meuArry = [1, 23, 55 ,67 ,30 ,2 , 4 ];

console.log(filtraPares(meuArry))