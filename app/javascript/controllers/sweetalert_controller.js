import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2"
// Connects to data-controller="sweetalert"
export default class extends Controller {
  connect() {
    console.log("Sweet")
  }
  showAlert (event) {
    event.stopImmediatePropagation()
    event.preventDefault()
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }  
}
