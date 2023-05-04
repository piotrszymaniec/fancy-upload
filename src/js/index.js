import { createView, resetView, resetUploadedContainer, clearFormInput, createUniqueFileList } from "./helpers.js"


const $fancyUpload = document.querySelector('[data-fancyupload]')
const $dropzone = $fancyUpload.querySelector('[data-fancyupload-dropzone]')
const $uploadInput = $fancyUpload.querySelector('[data-fancyupload-input]')
const $removeFilesBtn = $fancyUpload.querySelector('[data-fancyupload-remove-files-btn]')
const $form = $fancyUpload.querySelector('[data-fancyupload-form]')
const $uploadedContainerItems = $fancyUpload.querySelector('[data-fancyupload-container]')


const fileStorage = {
  data: new DataTransfer(),
  addFiles(fileList) {
    const mergedFileLists = createUniqueFileList(this.data.files, fileList)
    this.removeFiles()
    Array.from(mergedFileLists).forEach(file => this.data.items.add(file))
  },
  getFiles() {
    return this.data.files
  },
  removeFiles() {
    this.data.items.clear()
  }
}


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
  const mergedFileLists = createUniqueFileList(fileStorage.getFiles(), files)
  $uploadInput.files = mergedFileLists
  resetUploadedContainer()
  createView(mergedFileLists)
}

function onFilesDropped(e) {
  e.preventDefault()
  const currentFiles = $uploadInput.files
  const droppedFiles = e.dataTransfer.files
  const mergedFileLists = createUniqueFileList(currentFiles, droppedFiles)
  $uploadInput.files = mergedFileLists
  resetUploadedContainer()
  createView(mergedFileLists)
}

function onFilesRemove() {
  fileStorage.removeFiles()
  resetView()
  clearFormInput()
}
