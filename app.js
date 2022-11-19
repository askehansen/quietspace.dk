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
    quietspace.style = `transform: scale(${(100 - (window.scrollY - 400) / 20) / 100}); opacity: ${(100 - (window.scrollY - 400) / 5) / 100}`
  }
  else {
    quietspace.style = `transform: scale(1); opacity: 1`
  }

  const arrowdown = document.querySelector(".js-arrow-down")
  arrowdown.style = `opacity: ${(100-window.scrollY / 2) / 100}`

  const clients = document.querySelector(".js-clients")
  if (window.scrollY > 1960) {
    clients.style = `transform: translateY(-${window.scrollY - 1960}px); opacity: ${(100 - (window.scrollY - 1960) / 3) / 100}`
  }
  else if (window.scrollY > 1000) {
    let scroll = (window.scrollY - 1000 - 200)
    if (scroll > 0) {
      scroll = 0
    }
    clients.style = `transform: translateX(${scroll}px); opacity: ${((window.scrollY - 1000 + 100) / 3) / 100}`
  }
  else {
    clients.style = `transform: opacity: 0`
  }

})