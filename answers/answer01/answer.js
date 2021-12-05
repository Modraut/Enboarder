

// Array.reduce()
// Assume that the array only contains numbers and strings
// [{a:1},{b:2}].reduce((a,b)=>a+b) will return '[object Object][object Object]' which is a string

const reduce = (arr, cb, initialValue) => {
  // type check if needed. This is the error I got from e.g. "string".reduce()
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr}.reduce is not a function`)
  }
  let result
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[0] === 'string') {
      if (i === 0) {
        result = initialValue ? cb(initialValue, arr[i], i, arr) : arr[i]
        //  because I can see that ["a","b"].reduce((a,b,index)=>a+b+index) will return "ab1" instead of "a0b1"
      } else {
        result = cb(result, arr[i], i, arr)
      }
    } else if (typeof arr[0] === 'number') {
      if (i === 0) {
        result = initialValue ? 0 : initialValue
      }  // to initialize
      result = cb(result, arr[i], i, arr)
    }
  }
  return result
}

// Array.map()

const map = (arr, cb) => {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr}.map is not a function`)
  }
  const arrNew = []
  for (let i = 0; i < arr.length; i++) {
    const item = cb(arr[i], i, arr)
    arrNew.push(item)
  }
  return arrNew
}