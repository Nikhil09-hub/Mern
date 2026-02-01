let str = 'Hello'
let n = '123'
console.log(typeof str);
console.log(typeof n);
//str->[Array of characters]
console.log(str[1]);
let wish = "Good evening"
console.log(wish.length);
console.log(wish.slice(2));
console.log(wish);
//2 is included but 6 will not be included  2 3 4 5
console.log(wish.slice(2,6));
//replace ->replace first occurencce
console.log(wish.replace('o','x'));
console.log(wish.replaceAll('o','x'));
console.log(wish.replace('evening','afternoon'));
console.log(wish.toUpperCase());
console.log(wish.toLowerCase());

let str1= 'abc'
let str2 = 'xyz'
console.log(str1.concat(str2));
//Access character ay specific index
console.log(wish.charAt(0));

console.log(wish.split(""));
console.log(wish.split(" "));
