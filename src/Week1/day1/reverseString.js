
// const str = "Apple pie";
// const reserve = str.split("").reverse().join("");
// console.log(reserve);

function reverseString (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--)  {
        reversed += str[i];
    }
    return reversed; 
}

console.log(reverseString('apple pie')); 