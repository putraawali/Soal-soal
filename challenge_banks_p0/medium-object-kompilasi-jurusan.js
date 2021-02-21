/*
Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. Bentukan output dapat dilihat pada contoh

Contoh :

[
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

output : 
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/
function kompilasi(arr) {
  let output = {};
  let tempBio = [];
  let tempFis = [];
  let tempAku = [];

  for (let i = 0; i < arr.length; i++) {
    if (output[arr[i][0]] === undefined) {
      output[arr[i][0]] = []
    }
    if (arr[i][0] === 'Biologi') {
      tempBio.push(arr[i][1]);
    } else if (arr[i][0] === 'Fisika') {
      tempFis.push(arr[i][1]);
    } else {
      tempAku.push(arr[i][1])
    }
  }
  output['Biologi'] = tempBio;
  output['Fisika'] = tempFis;
  output['Akuntansi'] = tempAku
  return output;
}

console.log(kompilasi(
  [
    ['Biologi', 'Jonas'],
    ['Fisika', 'Ulrich'],
    ['Akuntansi', 'Hannah'],
    ['Biologi', 'Barbosz'],
    ['Fisika', 'Claudia'],
    ['Biologi', 'Edmund'],
  ]
))

// output: {
//   Biologi: ['Jonas', 'Barbosz', 'Edmund'],
//   Fisika: ['Ulrich', 'Claudia'],
//   Akuntansi: ['Hannah']
// }