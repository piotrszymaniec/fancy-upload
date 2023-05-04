import { fileStorage } from "./storage.js"
import { createView, resetView, resetUploadedContainer, clearFormInput } from "./view.js"
import { $uploadInput, $dropzone, $removeFilesBtn } from "./dom-elements.js"

$uploadInput.addEventListener('click', onFormInputClick)
$uploadInput.addEventListener('change', onFileBrowsed)
$dropzone.addEventListener('dragover', (e) => {
  e.preventDefault()
})

$dropzone.addEventListener('drop', onFilesDropped)
$removeFilesBtn.addEventListener('click', onFilesRemove)

function onFormInputClick() {
  fileStorage.addFiles($uploadInput.files)
}

function onFileBrowsed(e) {
  const { target: { files } } = e
  $uploadInput.files = fileStorage.addFiles(files)
  resetUploadedContainer()
  createView($uploadInput.files)
}

function onFilesDropped(e) {
  e.preventDefault()
  const droppedFiles = e.dataTransfer.files
  $uploadInput.files = fileStorage.addFiles(droppedFiles)
  resetUploadedContainer()
  createView($uploadInput.files)
}

function onFilesRemove() {
  fileStorage.removeFiles()
  resetView()
  clearFormInput()
}
