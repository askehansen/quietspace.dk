import SceneController from "./scene_controller"

export default class extends SceneController {
  static targets = ["contact"]
  
  render () {
    this.renderContact(this.contactTarget)
  }

  renderContact (el) {
    let scale = ((this.scrollY + window.innerHeight - 200) / 3) / 100
    scale = 2 - scale
    if (scale > 2) {
      scale = 2
    }
    else if (scale < 1) {
      scale = 1
    }
    el.style = `transform: scale(${scale}); opacity: ${((this.scrollY + window.innerHeight - 200) / 3) / 100}`
  }

}