let str = 'петя';

function ucFirst(str) {
   return str[0].toUpperCase() + str.slice(1);  
}

alert(ucFirst(str));