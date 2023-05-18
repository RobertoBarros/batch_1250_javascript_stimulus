import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['button', 'link']

  connect() {
    // console.log("Hello from our first Stimulus controller")
    // console.log(this.buttonTarget);
    // console.log(this.linkTarget);
  }

  disable() {
    this.buttonTarget.innerText = "Bingo!"
    this.buttonTarget.setAttribute("disabled", "")

    this.linkTarget.classList.remove('d-none')
  }

  enable() {
    this.buttonTarget.innerText = "Click me"
    this.buttonTarget.removeAttribute("disabled")

    this.linkTarget.classList.add('d-none')
  }
}
