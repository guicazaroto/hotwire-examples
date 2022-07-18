import { Controller } from "@hotwired/stimulus"
import _ from "lodash"
// Connects to data-controller="search"
export default class extends Controller {
  connect () {
    this.perform = _.debounce(this.perform, 500).bind(this)
  }

  perform () {
    this.element.requestSubmit()
  }
}
