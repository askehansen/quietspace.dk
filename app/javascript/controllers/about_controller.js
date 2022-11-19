import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["about", "title"]
  
  connect () {
    window.addEventListener("scroll", () => {
      this.renderAbout(this.aboutTarget)
      this.renderTitle(this.titleTarget)
    })
  }

  renderAbout(el) {
    if (this.scrollY > -300) {
      el.style = `opacity: ${((this.scrollY + 300) / 3) / 100}`
    }
    else {
      el.style = `opacity: 0`
    }
  }

  renderTitle(el) {
    if (this.scrollY > -300) {
      let base = (this.scrollY + 300) / 50
      let height = 7 - base
      if (height < 1.75) {
        height = 1.75
      }
      el.style = `line-height: ${height}rem`
    }
  }

  get scrollY () {
    return -this.element.getBoundingClientRect().top
  }
}