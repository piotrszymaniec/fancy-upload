// const $fancyupload = document.querySelector('[data-fancyupload]')
const $form = $fancyupload.querySelector('[data-fancyupload-form]')
const $fileInput = $form.querySelector('[data-fancyupload-input]')
// const $submitBtn = $fancyupload.querySelector('[data-fancyupload-submit]')

function uploadFiles() {
  const formData = new FormData();
  const files = $fileInput.files;

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  $form.submit()
  //missing logic
}
$submitBtn.addEventListener('click', uploadFiles)