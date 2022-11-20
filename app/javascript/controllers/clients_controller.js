import SceneController from "./scene_controller"

export default class extends SceneController {
  static targets = ["title"]
  
  render () {
    this.renderTitle(this.titleTarget)
  }

  renderTitle (el) {
    if (this.scrollY > 460) {
      // leave
      el.style = `transform: translateX(${this.scrollY - 460}px); opacity: ${(100 - (this.scrollY - 460) / 3) / 100}`
    }
    else if (this.scrollY > -500) {
      // enter
      let scroll = (this.scrollY - -500 - 200)
      if (scroll > 0) {
        scroll = 0
      }
      el.style = `transform: translateX(${scroll}px); opacity: ${((this.scrollY - -500 + 100) / 3) / 100}`
    }
    else {
      el.style = `transform: opacity: 0`
    } 
  }
}