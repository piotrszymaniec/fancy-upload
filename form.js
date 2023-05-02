const form = document.querySelector('[data-form-upload]')

const submitBtn = document.querySelector('.controls .submit-btn')

submitBtn.addEventListener('click', uploadFiles)
function uploadFiles() {
  form.submit()
  //missing logic
}