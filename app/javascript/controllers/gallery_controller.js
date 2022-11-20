import SceneController from "./scene_controller"

export default class extends SceneController {
  static targets = ["gallery"]
  
  render () {
    this.renderGallery(this.galleryTarget)
  }

  renderGallery (el) {
    if (this.scrollY > -1000) {
      let x = (this.scrollY - 500) * -1
      let y = 0
      let width = 0
      this.galleryTarget.querySelectorAll("img").forEach(el => {
        width += el.offsetWidth
      })
      let maxX = width - window.innerWidth
      if (maxX < x*-1) {
        x = maxX * -1
        y = 0

        y = this.scrollY - width

        if (y < 0) {
          y = 0
        }
        else {
          y = y * -1
        }
      }
      else {
        y = 0
      }

      if (y < 0) {
        this.element.classList.remove("bg-white")
      }
      else {
        this.element.classList.add("bg-white")
      }

      el.style = `transform: translateX(${x}px) translateY(${y}px);`
    }
  }

}