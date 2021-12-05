
// Assume both params are strings

const isAnagram = (strOne, strTwo) => {
  return strOne.split('').sort().join('') === strTwo.split('').sort().join('')
}