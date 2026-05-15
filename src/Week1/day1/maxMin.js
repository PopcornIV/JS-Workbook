
const findMax = function(a) {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }   
    }
        return max;
}

console.log(findMax([-7,-20,-50,-5]));


const findMin = function(a) {
    let min = a[0];
    for (let j = 0; j < a.length; j++) {
        if (a[j] < min) {
            min = a[j];
        }
    }
        return min;
}
 
let minimum = findMin([6,-7,8,3,5,4]);

console.log (minimum);


