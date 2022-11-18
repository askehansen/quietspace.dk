window.addEventListener("scroll", () => {
  const itsaboutthepractise = document.querySelector(".js-itsaboutthepractise")
  itsaboutthepractise.style = `transform: translateX(-${window.scrollY}px); opacity: ${(100-window.scrollY / 2) / 100}`

  const mark = document.querySelector(".js-mark")
  if (window.scrollY > 200) {
    mark.style = `transform: translateY(${window.scrollY - 200}px)`
  }
  else {
    mark.style = `transform: translateY(0px)`
  } 

  const quietspace = document.querySelector(".js-quietspace")
  if (window.scrollY > 400) {
    quietspace.style = `opacity: ${(100 - (window.scrollY - 400) / 5) / 100}`
  }
  else {
    quietspace.style = `opacity: 1`
  }
})