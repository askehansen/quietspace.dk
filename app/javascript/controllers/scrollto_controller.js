import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static values = {
    target: String
  }

  go () {
    this.target.scrollIntoView({ behavior: "smooth" })
  }

  get target () {
    return document.querySelector(this.targetValue)
  }
}