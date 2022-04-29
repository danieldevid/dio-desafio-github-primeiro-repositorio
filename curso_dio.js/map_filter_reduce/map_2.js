
const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja' ,mapComThis(nums, laranja)); 

function mapSemThis(arry) {
   return arry.map(function(item) {
        return item* 2;
    } );
}
