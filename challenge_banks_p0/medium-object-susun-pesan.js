/*
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. Setiap elemen array akan berupa array yang berisi kata dan posisi nya. Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata. Silakan menambahkan contoh soal lain jika merasa perlu

Contoh :

[
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5],
]

outputnya : 'kita akan menyerang besok pagi'


[
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2],
]

outputnya : 'musuh membawa granat'
*/

function susunPesan(arr) {
  let output = '';
  const tempObj = {}
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i][0], arr[i][1])
    if (tempObj[arr[i][1]] === undefined) {
      tempObj[arr[i][1]] = arr[i][0]
    }
  }
  // console.log(tempObj)
  
  let aw = Object.keys(tempObj)

  // console.log(aw)
  for (let i = 0; i < aw.length; i++) {
    output += tempObj[aw[i]]
    if (aw[i + 1] !== undefined) {
      output += ' '
    }
  }

  // for (let keys in tempObj) {
  //   // console.log(tempObj[keys])
  //   output += tempObj[keys] + ' '
  // }
  
  return output
}

console.log(susunPesan([
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5]
]))

// outputnya : 'kita akan menyerang besok pagi'


console.log(susunPesan([
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2]
]))

outputnya : 'musuh membawa granat'