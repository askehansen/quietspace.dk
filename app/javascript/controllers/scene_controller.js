import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  visible = false

  connect () {
    let observer = new IntersectionObserver(entries => {
      this.visible = entries[0].isIntersecting === true

      if (this.visible) {
        this.element.classList.remove("opacity-0")
        this.element.classList.remove("-z-10")
      }
      else {
        this.element.classList.add("opacity-0")
        this.element.classList.add("-z-10")
      }
    },
    {
      threshold: [0]
    })

    observer.observe(this.element)

    this.render()
    
    window.addEventListener("scroll", () => {
      if (this.visible) {
        this.render()
      }
    })
  }

  get scrollY () {
    return -this.element.getBoundingClientRect().top
  }
}