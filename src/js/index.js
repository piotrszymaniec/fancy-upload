import { createView, resetView } from "./helpers.js"

const $fancyUpload = document.querySelector('[data-fancyupload]')
const $dropzone = $fancyUpload.querySelector('[data-fancyupload-dropzone]')
const $uploadInput = $fancyUpload.querySelector('[data-fancyupload-input]')
const $removeFilesBtn = $fancyUpload.querySelector('[data-fancyupload-remove-files-btn]')


$uploadInput.addEventListener('change', onFileSelected)
$removeFilesBtn.addEventListener('click', onFileRemove)

function onFileRemove() {
  resetView()
}

$dropzone.addEventListener('dragover', (e) => {
  e.preventDefault()
})

$dropzone.addEventListener('drop', (e) => {
  e.preventDefault()
  const files = e.dataTransfer.files
  createView(files)
})

function onFileSelected({ target: { files } }) {
  createView(files)
}