
// assume there is only one "the most recurring" character

const maxRecurringChar = (str) => {
  let chars = {}
  let countMax = 0
  let charMax = "" // the most recurring char
  for (let char of str) {
    if (chars.hasOwnProperty(char)) {
      chars[char]++
    } else {
      chars[char] = 1
    }
  }
  for (let char in chars) {
    if (chars[char] > countMax) {
      countMax = chars[char]
      charMax = char
    }
  }
  return charMax

}