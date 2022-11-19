import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["testimonials"]
  
  connect () {
    this.renderTestimonials(this.testimonialsTarget)
    window.addEventListener("scroll", () => {
      this.renderTestimonials(this.testimonialsTarget)
    })
  }

  renderTestimonials (el) {
    if (this.scrollY > -1000) {
      let val = (this.scrollY - 500) * -1
      el.style = `transform: translateX(${val}px);`
    } else {
      el.style = `transform: translateX(5000px);`
    }
  }

  get scrollY () {
    return -this.element.getBoundingClientRect().top
  }
}