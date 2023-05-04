import { formatBytes, chooseIconName } from "./helpers.js"
import { $downloadImg, $uploadInput, $uploadedContainer, $controls } from './dom-elements.js'
import { fileStorage } from "./storage.js"

function setUploadIconSuccess() {
  $downloadImg.src = 'assets/icons/file-upload-success.svg'
}
function resetUploadIcon() {
  $downloadImg.src = 'assets/icons/file-upload-icon.svg'
}

function createElement(htmlString, className, dataAttribute = '') {
  const element = document.createElement('div')
  element.setAttribute(dataAttribute, '')
  element.classList.add(className)
  element.innerHTML = htmlString
  return element
}

function removeFileListItem(filelist, index) {
  const files = Array.from(filelist)
  files.splice(index, 1)
}
function createFileItemElement({ name, size, type }, index) {
  const isEmpty = (str) => str === ''
  const htmlString = `
    <div class="file">
      <div class="file__icon"><img src="./assets/icons/filetype/${chooseIconName(name, type)}.svg" alt="file type icon"></div>
      <div class="file__info">
        <div class="file__info__name">${name}</div>
        <div class="file__info__type">${isEmpty(type) ? 'not available' : type}</div>
        <div class="file__info__size">${formatBytes(size)}</div>
      </div>
    </div>        
  `
  const fileItemElement = createElement(htmlString, 'uploaded-file-item', 'data-fancyupload-container-item')
  const removeBtn = createElement('', 'file__remove')
  removeBtn.addEventListener('click', () => {

    removeFileListItem($uploadInput.files, index)
    fileStorage.removeFile(index)
    fileItemElement.remove()
  })
  fileItemElement.append(removeBtn)
  return fileItemElement
}

function showElement(element) {
  element.classList.remove('hidden')
}
function hideElement(element) {
  element.classList.add('hidden')
}

function clearFormInput() {
  $uploadInput.value = ''
}
function resetUploadedContainer() {
  $uploadedContainer.innerHTML = ''
  hideElement($uploadedContainer)
}

function renderUploadedContainer(files) {
  const uploadedFileItemElements = [...files].map((file, index) => createFileItemElement(file, index))
  $uploadedContainer.append(...uploadedFileItemElements)
}

function createView(files) {
  renderUploadedContainer(files)
  setUploadIconSuccess()
  showElement($controls)
  showElement($uploadedContainer)
}

function resetView() {
  resetUploadedContainer()
  resetUploadIcon()
  hideElement($controls)
}

export { createView, clearFormInput, resetView, resetUploadedContainer }