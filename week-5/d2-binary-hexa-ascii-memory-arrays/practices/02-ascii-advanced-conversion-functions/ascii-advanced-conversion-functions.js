/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
  // Your code here
  blob = blob.substring(2)  //have to substring to take off the '0x'
  blob = parseInt(blob, 2) //makes this into decimal
  //console.log(blob)
  return `0x${blob.toString(16)}`

  //return `0x${parseInt(blob.substring(2), 2).toString(16)}`
}

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
  // Your code here
  blob = parseInt(blob); //converted to binary (dont need to radix for hexadecimal while parseInt!)
  //console.log(blob)
  blob = blob.toString(2);  //convert to binary (base2) w/ toString(2)
  return `0b${blob}`  //append 0b to blob

  //return `0b${parseInt(blob).toString(2)}`
}

/* Base 10 to ASCII */
function decimalToAscii(blob) {
  //console.log({blob})
  return String.fromCharCode(blob) //converts the decimal to ASCII
}

/* Base 2 to ASCII */
function binaryToAscii(blob) {
  // Your code here
  blob = blob.substring(2); //we gotta lop off the beginning '0b'
  blob = parseInt(blob, 2); //we converted to decimal w/ parseInt radix 2
  //console.log(blob)
  return String.fromCharCode(blob)

  //return String.fromCharCode(blob)
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
  blob = parseInt(blob);
  //console.log(blob)
  return String.fromCharCode(blob)

  //return String.fromCharCode(blob)

}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  const arr = [];   //we need to create an arr to put the string in it
  for(let char of blob) {   //have to iterate through the letters of each word
    arr.push(char.charCodeAt()) //empty () will look at index 0
  }

return arr;

//return blob.split('').map(char => char.charCodeAt());
}

// console.log('Binary to hexadecimal:')
// console.log(binaryToHexadecimal('0b1010')) // '0xa'
// console.log(binaryToHexadecimal('0b0011')) // '0x3'
// console.log('')

// console.log('Hexadecimal to binary:')
// console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
// console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
// console.log('')

// console.log('Decimal to ASCII:')
// console.log(decimalToAscii(65))  // 'A'
// console.log(decimalToAscii(97))  // 'a'
// console.log('')

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

// console.log('Hexadecimal to ASCII:')
// console.log(hexadecimalToAscii('0x43'))  // 'C'
// console.log(hexadecimalToAscii('0x63'))  // 'c'
// console.log('')

console.log('ASCII to decimal:')
console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
