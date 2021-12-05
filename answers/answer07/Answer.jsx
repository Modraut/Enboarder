
const autoExpandingTextarea = () => {
  const autoExpanding = (e) => {
    const textarea = e.target
    textarea.style.height = "0px"
    textarea.style.height = textarea.scrollHeight + "px"
  }
  return (
    <textarea onChange={(e) => autoExpanding(e)} />
  )
}