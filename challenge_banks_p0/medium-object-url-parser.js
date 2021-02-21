/*
===
URL Parser
===
Buatlah sebuah fungsi yang bernama urlParser, yang akan menerima input sebuah URL. Format URL adalah 'protocol://domain/username. Kemudian fungsi ini akan menghasilkan objek yang merupakan hasil parser dari URL yang di input. Jika username kosong, maka keluarkan tulisan : "not available" pada key username

Contoh ada pada driver code di bawah :
*/
function urlParser(str) {
  let output = {
    protocol: '',
    domain: '',
    unsername: ''
  };
  let tempStr = ''

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (str[i] === ":") {
      output['protocol'] = tempStr;
      // console.log(tempStr);
      tempStr = '';
    } else {
      tempStr += str[i]
    }

    if (str[i] === '/' && str[i - 1] === '/') {
      tempStr = '';
    } else if (str[i + 1] === '/') {
      output['domain'] = tempStr
      tempStr = '';
    } else if (str[i] === '/') {
      tempStr = ''
      console.log(tempStr)
    }

    if (str[i + 1] === undefined) {
      if (tempStr === '') {
        output['unsername'] = 'not available'
      } else {
        output['unsername'] = tempStr
      }
    }
  }
  return output
}

console.log(urlParser('https://facebook.com/foo'))
// {
//   protocol: 'https',
//   domain: 'facebook.com',
//   username: 'foo'
// }

console.log(urlParser('http://imgur.co.id/'))
// {
//   protocol: 'http',
//   domain: 'imgur.co.id',
//   username: 'not available'
// }