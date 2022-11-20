import SceneController from "./scene_controller"

export default class extends SceneController {
  static targets = ["testimonials"]
  
  render () {
    this.renderTestimonials(this.testimonialsTarget)
  }

  renderTestimonials (el) {
    if (this.scrollY > -1000) {
      let val = (this.scrollY - 500) * -1
      el.style = `transform: translateX(${val}px);`
    } else {
      el.style = `transform: translateX(5000px);`
    }
  }

}