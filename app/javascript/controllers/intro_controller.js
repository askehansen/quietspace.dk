import SceneController from "./scene_controller"

export default class extends SceneController {
  static targets = ["itsaboutthepractise", "quietspace", "mark", "arrowdown"]

  render () {
    this.renderItsaboutthepractise(this.itsaboutthepractiseTarget)
    this.renderMark(this.markTarget)
    this.renderQuietspace(this.quietspaceTarget)
    this.renderArrowdown(this.arrowdownTarget)
  }

  renderItsaboutthepractise (el) {
    // leave
    el.style = `transform: translateX(-${this.scrollY}px); opacity: ${(100-this.scrollY / 2) / 100}`
  }

  renderMark (el) {
    if (this.scrollY > 200) {
      // leave
      el.style = `transform: translateY(${this.scrollY - 200}px)`
    }
    else {
      el.style = `transform: translateY(0px)`
    }
  }

  renderQuietspace (el) {
    if (this.scrollY > 400) {
      // leave
      el.style = `transform: scale(${(100 - (this.scrollY - 400) / 20) / 100}); opacity: ${(100 - (this.scrollY - 400) / 5) / 100}`
    }
    else {
      el.style = `transform: scale(1); opacity: 1`
    }
  }

  renderArrowdown (el) {
    // leave
    el.style = `opacity: ${(100-this.scrollY / 2) / 100}`
  }
}