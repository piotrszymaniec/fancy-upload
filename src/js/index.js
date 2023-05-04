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
  const mergedFileLists = fileStorage.addFiles(files)
  $uploadInput.files = mergedFileLists
  resetUploadedContainer()
  createView(mergedFileLists)
}

function onFilesDropped(e) {
  e.preventDefault()
  const currentFiles = $uploadInput.files
  const droppedFiles = e.dataTransfer.files
  const mergedFileLists = fileStorage.addFiles(droppedFiles)
  // const mergedFileLists = createUniqueFileList(currentFiles, droppedFiles)
  $uploadInput.files = mergedFileLists
  resetUploadedContainer()
  createView(mergedFileLists)
}

function onFilesRemove() {
  fileStorage.removeFiles()
  resetView()
  clearFormInput()
}
