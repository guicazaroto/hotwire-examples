import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"
// Connects to data-controller="sweetalert"
export default class extends Controller {
  static values = { title: String }
  
  connect() {
    this.redirect = false
  }
  showAlert (event) {
    if (this.redirect) return

    event.stopImmediatePropagation()
    event.preventDefault()
    
    Swal.fire({
      title: this.titleValue,
      showCancelButton: true,
      confirmButtonText: 'Go',
    }).then((result) => {
      if (result.isConfirmed) {
        this.redirect = true
        this.element.click()
      }
    })    
  
  }
}
