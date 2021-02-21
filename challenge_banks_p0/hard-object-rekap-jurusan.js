/*
===
Rekap Jurusan
===

Diberikan array of object dari data di TU kampus :
{
  'Adi': {
    'jurusan': 'TI',
    'nilai': 80
  },
  'Bintang': {
    'jurusan': 'Biologi',
    'nilai': 70
  },
  'Nanda': {
    'jurusan': 'TI',
    'nilai': 90
  },
  'Rama': {
    'jurusan': 'Elektro',
    'nilai': 80
  },
  'Reggi': {
    'jurusan': 'TI',
    'nilai': 100
  },
  'Windy': {
    'jurusan': 'Biologi',
    'nilai': 100
  },
}

Diminta untuk melakukan rekap per Jurusan sehingga data nya menjadi seperti ini :
{
  'TI': {
    'mahasiswa': ['Adi', 'Nanda', 'Reggi'],
    'rata-rata': 90
  },
  'Biologi': {
    'mahasiswa': ['Bintang', 'Windy],
    'rata-rata': 85
  },
  'Elektro': {
    'mahasiswa': ['Rama'],
    'rata-rata': 80
  }
}

*/
function rekap(arr) {
  let output = {};
  let tempObj = {};

  for (let i = 0; i < arr.length; i++) {
    // let nilaiTotal = 0;
    // console.log(arr[i])
    for (let key in arr[i]) {
      // console.log(key)
      let jurusan = arr[i][key].jurusan;
      let nilai = arr[i][key].nilai;
      let nama = key;
      if (output[jurusan] === undefined) {
        output[jurusan] = {
          mahasiswa: [],
          'rata-rata': 0,
        }
      }
      if (tempObj[jurusan] === undefined) {
        tempObj[jurusan] = {
          nilai: 0
        }
      }
      output[jurusan].mahasiswa.push(nama)
      tempObj[jurusan].nilai += nilai
      output[jurusan]['rata-rata'] = tempObj[jurusan].nilai / output[jurusan].mahasiswa.length
    }
  }
  // console.log(tempObj)
  return output
};

let arrayRekap = [{
  'Adi': {
    'jurusan': 'TI',
    'nilai': 80
  },
  'Bintang': {
    'jurusan': 'Biologi',
    'nilai': 70
  },
  'Nanda': {
    'jurusan': 'TI',
    'nilai': 90
  },
  'Rama': {
    'jurusan': 'Elektro',
    'nilai': 80
  },
  'Reggi': {
    'jurusan': 'TI',
    'nilai': 100
  },
  'Windy': {
    'jurusan': 'Biologi',
    'nilai': 100
  },
}]
console.log(rekap(arrayRekap));