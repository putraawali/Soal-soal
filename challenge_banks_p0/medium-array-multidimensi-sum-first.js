/*
Buatlah fungsi sumFirst yang akan menerima input sebuah array 2 dimensi yang berisi angka2 random dan mengembalikan hasil penjumlahan element pertama saja dari setiap nested array nya
*/

let arr = [
  [1, 2, 3],
  [5, 4, 3, 2, 1],
  [10, 100000]
]

function sumFirst(arr) {
  let output = 0;

  for (let i = 0; i < arr.length; i++) {
    output += arr[i][0]
  }

  return output
}

console.log(sumFirst(arr)) // 16, didapat dari 1 + 5 + 10