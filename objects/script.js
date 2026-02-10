//  Reverse a word.

// let input = 'Govind';
// let output = ''
// for (i = input.length - 1; i >= 0; i--) {
//     output = output + input[i];
// }
// console.log(output);

// Reverse a string but keep the order.

// let input = "Govind Sharma"
// let output = '';
// let word = '';
// let i = 0;
// // let j = 0;
// let reversed = '';

// // first for loop: iterating over input.length - 1 times.
// for (; i < input.length; i++) {

//     let j = i;
//     // goes through the input and gets the word that lies before the space. GETS WORDS.
//     for (; j < input.length && input[j] !== " "; j++) {
//         word += input[j];
//     }
//     // Reverses the word that was extracted from the input string.
//     for (let x = word.length - 1; x >= 0; x--) {
//         reversed += word[x];
//     }
//     if (j !== input.length - 1) {
//         reversed += " "
//     }
//     word = '';
//     i = j;
// }
// console.log(reversed);


// const count = 0;
// count = count + 1;

// Find the bug and fix it. It is pretty obvious that we need to use a different keyword to declare the variable 'count'.

// let count = 0;
// count = count + 1;

// console.log(10 + "5"); // I am sure this will give the output "15".
// console.log("10" - 5); // Here the coercion will occur, hence, giving output "5".
// console.log(null + 1); // null
// console.log(undefined + 1); // NaN

// Find the largest number in an array.

// A = [1, 2, 4, 5, 9]
// output = 9

// Start from 0 index
// Compare adjacent numbers, store the bigger on in the max.
// Compare the max to the next number, the bigger one gets the max label.
// This continues as long as we don't get to the last element in an array.

// let i = 0;
// let max = A[i]
// while (i < A.length) {
//     if (max > A[i]) {
//         max = max;
//     } else {
//         max = A[i]
//     }
//     i++;
// }
// console.log(max);

// Manual Search

// let arr = ['govind', 'tushar', 'devendra', 'sanjay', 'arjun'];
// let target = 'sanjay';
// target = target.toLowerCase();

// let i = 0;
// let found = false;

// while (i < arr.length) {
//     if (target === arr[i]) {
//         found = true;
//         break;
//     }
//     i++;
// }

// console.log(found);



// A = [1, 3, 3, 4, 2];
// frequency = {};
// for (let i = 0; i < A.length; i++) {
//     let count = 0;
//     let target = A[i];
//     if (target in frequency) {
//         continue;
//     } else {
//         for (let j = 0; j < A.length; j++) {
//             if (target === A[j]) {
//                 count++;
//             }
//         }
//         frequency[target] = count;
//     }
// }
// console.log(frequency);

const A = [1, 3, 3, 4, 2];
const frequency = {};

for (let i = 0; i < A.length; i++) {
    const value = A[i];
    frequency[value] = (frequency[value] || 0) + 1;
}

console.log(frequency);