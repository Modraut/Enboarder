
/**
* @params null
* @return {object}
* @example {
*  url1: "valid",
*  url2: "valid",
*  url3: "invalid"
* }
*/
const checkUrls = () => {

  const elems = document.querySelectorAll('a,link')
  const urls = Array.from(elems).map(elem => elem.getAttribute("href"))

  const promisesCache = new Map()
  const promises = urls.map(url => memorize(url, promisesCache))

  const urlStatus = {}
  Promise.all(promises).then(values => {
    values.forEach((res, i) => {
      if (urlStatus.hasOwnProperty(urls[i]))
        urlStatus[urls[i]] = res.status === 200 ? "valid" : "invalid"
    })
  })
  return urlStatus
}

// cache promises
const memorize = (url, cache) => {
  if (!cache.has(url)) {
    const promise = fetch(url, { method: 'GET' })  // use fetch instead of axios as it's built-in
    cache.set(url, promise)
  }
  return cache.get(url)
}




