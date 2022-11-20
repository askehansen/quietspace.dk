import SceneController from "./scene_controller"

export default class extends SceneController {
  static targets = ["video"]
  
  render () {
    this.renderVideo(this.videoTarget)
  }

  renderVideo(el) {
    if (this.scrollY > 0) {
      let opacity = ((this.scrollY) / 3) / 100
      let scale = ((this.scrollY) / 3) / 100
      scale = scale + 0.5
      if (scale > 1) {
        scale = 1
      }
      el.style = `opacity: ${opacity}; transform: scale(${scale})`
    }
    else {
      el.style = "opacity: 0;"
    }
  }

}