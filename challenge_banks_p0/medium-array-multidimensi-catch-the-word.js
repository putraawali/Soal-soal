/*
Buatlah sebuah function catchTheWord yang akan menerima input berupa array 2 dimensi. Ambil huruf dari tiap nested array dan rangkaikan jadi 1 kalimat. Hiraukan semua spasi. Dan jika di nested array tersebut tidak ada huruf, tidak usah ambil apapun
*/

let arr_str = [
  [' ', 'H', ' '],
  ['a', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'c', ' ', ' '],
  [' ', ' ', ' ', 'k', ' '],
  [' ', ' ', 't', ' '],
  [' ', ' ', 'i', ' ', ' '],
  [' ', ' ', ' ', 'v', ' '],
  [' '],
  [' ', ' ', ' ', ' ', '8']
]

function catchTheWord(arr) {
  let output = '';

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j])
      if (arr[i][j] !== ' ') {
        output += arr[i][j];
      }
    }
  }

  return output;
}

console.log(catchTheWord(arr_str)) // Hacktiv8