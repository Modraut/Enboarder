

// _.groupBy

const groupBy = (arr, criterion) => {
  // params check
  if (!Array.isArray(arr) || !["function", "string"].includes(typeof criterion)) {
    throw new Error("Please provide valid params")
  }
  let obj = {}
  arr.forEach(item => {
    const key = typeof criterion === "function" ? criterion(item) : item[criterion]
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [item] // create the key if it doesn't exist
    } else {
      obj[key].push(item)
    }
  })
  return obj
}